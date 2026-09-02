import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 48,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105 select-none drop-shadow-[0_0_15px_rgba(199,68,238,0.25)]"
      >
        <defs>
          {/* Top arc for BARE BY NATURE */}
          <path
            id="topTextArc"
            d="M 68,200 A 132,132 0 0,1 332,200"
            fill="none"
          />
          {/* Bottom arc for INTIMATE CARE SPECIALIST (rendered clockwise for upright text) */}
          <path
            id="bottomTextArc"
            d="M 336,200 A 136,136 0 0,1 64,200"
            fill="none"
          />
          {/* Gradient for luxury purple accent */}
          <linearGradient id="purpleDiskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#962ba8" />
            <stop offset="100%" stopColor="#671b78" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e28aff" />
            <stop offset="50%" stopColor="#8b2fa0" />
            <stop offset="100%" stopColor="#c744ee" />
          </linearGradient>
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f5adff" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* Outer subtle glowing ring */}
        <circle
          cx="200"
          cy="200"
          r="194"
          stroke="url(#ringGrad)"
          strokeWidth="3.5"
          className="opacity-90"
        />

        {/* Inner boundary ring */}
        <circle
          cx="200"
          cy="200"
          r="185"
          stroke="#742582"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />

        {/* Decorative Side Dots (left & right) */}
        <g id="side-markers">
          {/* Left marker */}
          <circle cx="56" cy="200" r="5.5" fill="#8b2fa0" stroke="#f5adff" strokeWidth="1.5" />
          <circle cx="54.5" cy="200" r="2.5" fill="#f5adff" />
          
          {/* Right marker */}
          <circle cx="344" cy="200" r="5.5" fill="#8b2fa0" stroke="#f5adff" strokeWidth="1.5" />
          <circle cx="345.5" cy="200" r="2.5" fill="#f5adff" />
        </g>

        {/* Curved Top Text: BARE BY NATURE */}
        <text
          fill="#ffffff"
          fontSize="23"
          fontFamily="Cinzel, 'Playfair Display', Georgia, serif"
          fontWeight="600"
          letterSpacing="0.28em"
          className="drop-shadow-sm"
        >
          <textPath
            href="#topTextArc"
            startOffset="50%"
            textAnchor="middle"
          >
            BARE BY NATURE
          </textPath>
        </text>

        {/* Curved Bottom Text: INTIMATE CARE SPECIALIST */}
        <text
          fill="#f5adff"
          fontSize="17"
          fontFamily="Cinzel, 'Montserrat', sans-serif"
          fontWeight="600"
          letterSpacing="0.24em"
        >
          <textPath
            href="#bottomTextArc"
            startOffset="50%"
            textAnchor="middle"
          >
            INTIMATE CARE SPECIALIST
          </textPath>
        </text>

        {/* Inner Decorative Ring Framing Center */}
        <circle
          cx="200"
          cy="200"
          r="92"
          stroke="#8b2fa0"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="4 3"
        />

        {/* Center Purple Circle Disk */}
        <circle
          cx="200"
          cy="200"
          r="80"
          fill="url(#purpleDiskGrad)"
          stroke="#b842d4"
          strokeWidth="2.5"
        />

        {/* Graceful Female Silhouette Artwork inside Purple Circle */}
        <g transform="translate(200, 200) scale(0.9) translate(-200, -200)">
          {/* Main silhouette body fill */}
          <path
            d="M 194,142 
               C 190,135 186,132 181,133 
               C 176,134 174,140 178,146 
               C 181,150 185,155 186,160 
               C 183,161 179,163 177,167 
               C 174,172 175,178 179,183 
               C 183,188 187,194 186,201 
               C 184,209 178,216 177,225 
               C 176,233 179,242 184,250 
               C 189,258 193,267 192,277 
               C 192,280 193,283 194,285
               C 195,283 196,279 196,276
               C 198,266 203,257 207,249
               C 212,240 214,231 213,222
               C 211,213 206,207 204,199
               C 202,192 205,186 209,181
               C 213,176 214,170 211,165
               C 209,161 205,159 203,156
               C 206,150 207,144 203,138
               C 200,133 197,137 194,142 Z"
            fill="#ffffff"
            filter="url(#subtleGlow)"
          />

          {/* Delicate Artistic Outline Lines representing hair, posture, and elegance */}
          {/* Raised Arm & Back of Head curve */}
          <path
            d="M 183,136 
               C 187,126 195,120 200,123 
               C 205,126 204,136 199,144
               C 194,152 191,159 192,165"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Profile face & neck contour */}
          <path
            d="M 197,143 
               C 202,146 204,150 203,155 
               C 201,160 197,163 195,166"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Flowing hair strands cascading to the right */}
          <path
            d="M 201,138 
               C 210,144 218,154 219,166 
               C 220,175 214,183 222,192 
               C 225,195 224,198 221,199
               C 216,197 214,190 215,183
               C 216,174 213,168 206,162"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#ffffff"
            fillOpacity="0.4"
          />

          {/* S-curve torso & waist definition */}
          <path
            d="M 186,172 
               C 181,178 180,186 183,194 
               C 187,202 186,211 181,219 
               C 177,226 177,235 182,244 
               C 187,253 190,263 189,274"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Back & Hip curve definition */}
          <path
            d="M 203,170 
               C 207,177 207,185 204,193 
               C 200,201 202,210 207,218 
               C 212,226 212,236 206,245 
               C 201,254 198,264 198,274"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Delicate collarbone & navel accent */}
          <path
            d="M 191,175 C 193,176 195,176 197,175"
            stroke="#762a8c"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="194" cy="223" r="1.2" fill="#762a8c" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-headline font-extrabold text-lg sm:text-xl tracking-wide text-white leading-none">
            Bare By Nature
          </span>
          <span className="text-[10px] tracking-[0.22em] text-[#f5adff] font-medium uppercase mt-1">
            Intimate Care Specialist
          </span>
        </div>
      )}
    </div>
  );
};
