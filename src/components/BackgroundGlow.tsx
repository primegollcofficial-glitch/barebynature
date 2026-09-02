import React, { useEffect, useRef } from 'react';

export const BackgroundGlow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const syncSize = () => {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    syncSize();
    window.addEventListener('resize', syncSize);

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = v_texCoord;
        // Deep obsidian base color
        vec3 color = vec3(0.065, 0.045, 0.08);

        // Multiple organic moving blobs
        for (float i = 1.0; i < 4.0; i++) {
          vec2 p = uv;
          p.x += 0.25 * sin(u_time * 0.25 * i + i * 2.8);
          p.y += 0.25 * cos(u_time * 0.2 * i + i * 1.6);

          float dist = length(p - vec2(0.45 + 0.1 * sin(u_time * 0.1), 0.5 + 0.1 * cos(u_time * 0.15)));
          float blob = smoothstep(0.65, 0.15, dist);

          vec3 blobColor = mix(
            vec3(0.48, 0.12, 0.56),
            vec3(0.72, 0.24, 0.88),
            sin(u_time * 0.3 + i) * 0.5 + 0.5
          );
          color = mix(color, blobColor, blob * 0.22);
        }

        // Mouse interactive soft ambient glow
        vec2 normMouse = u_mouse / u_resolution;
        float mouseDist = length(uv - vec2(normMouse.x, 1.0 - normMouse.y));
        float mouseGlow = smoothstep(0.5, 0.05, mouseDist);
        color += vec3(0.65, 0.18, 0.82) * (mouseGlow * 0.08);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, vsSource);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const onMouseMove = (e: MouseEvent) => {
      mousePos = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;
    const render = (time: number) => {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);

      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uResolution) gl.uniform2f(uResolution, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mousePos.x, mousePos.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* WebGL Canvas Shader */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
        style={{ display: 'block' }}
      />

      {/* Layered CSS Blobs for depth & fallback */}
      <div className="absolute top-[-10%] left-[-10%] w-[65vw] h-[65vw] rounded-full bg-[#9d01c6]/20 blur-[130px] blob-anim-1 mix-blend-screen" />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#8b2fa0]/25 blur-[120px] blob-anim-2 mix-blend-screen"
        style={{ animationDelay: '-6s' }}
      />
      <div className="absolute top-[35%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-[#f5adff]/10 blur-[100px] blob-anim-1 mix-blend-screen" />

      {/* Radial soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,47,160,0.08)_0%,transparent_60%)]" />
    </div>
  );
};
