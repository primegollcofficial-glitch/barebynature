import React from 'react';
import { Sparkles, Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="glass-card rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#f5adff]/40 bg-[#1f1925]/95">
        <div className="w-6 h-6 rounded-full bg-[#8b2fa0] flex items-center justify-center text-white shrink-0">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
          {message}
        </span>
      </div>
    </div>
  );
};
