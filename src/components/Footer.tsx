import React from 'react';
import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/services';
import { Logo } from './Logo';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking }) => {
  return (
    <footer id="app-global-footer" className="w-full bg-[#110c17]/95 backdrop-blur-3xl border-t border-[#4f4350]/30 relative z-10 mt-24">
      {/* Top Pre-Footer Callout */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8b2fa0]/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
              Ready for Your Tailored Experience?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#d3c1d1]">
              Indulge in clinical precision and supreme relaxation. Reserve your bespoke aesthetic treatment today.
            </p>
          </div>
          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <button
              id="footer-book-btn"
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm md:text-base tracking-wide neon-glow neon-glow-hover transition-all duration-300 shadow-[0_0_25px_rgba(199,68,238,0.4)] cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mt-12 sm:mt-16 pt-8 border-t border-white/5">
          {/* Brand Info with Circular Logo */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo size={48} />
              <div className="flex flex-col">
                <span className="font-headline text-lg font-bold tracking-tight text-[#e9dff0]">
                  BARE BY NATURE
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#f5adff]/80 uppercase font-medium">
                  Intimate Care Specialist
                </span>
              </div>
            </div>
            <p className="text-xs text-[#d3c1d1]/80 leading-relaxed mt-1">
              High-end luxury spa treatments & intimate aesthetics in an environment designed for sensory indulgence and pure relaxation.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#f5adff]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sanctuary Open Mon–Fri</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-sm font-semibold text-[#f5adff] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#d3c1d1]">
              <li>
                <button
                  onClick={() => {
                    onSelectTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f5adff] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f5adff] transition-colors cursor-pointer"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f5adff] transition-colors cursor-pointer"
                >
                  Visual Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('reviews');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f5adff] transition-colors cursor-pointer"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f5adff] transition-colors cursor-pointer"
                >
                  About Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#f5adff] transition-colors cursor-pointer"
                >
                  Studio Booking & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div>
            <h4 className="font-headline text-sm font-semibold text-[#f5adff] uppercase tracking-wider mb-4">
              Studio Location
            </h4>
            <div className="space-y-3 text-xs text-[#d3c1d1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f5adff] shrink-0 mt-0.5" />
                <span>
                  {STUDIO_INFO.locationName}
                  <br />
                  {STUDIO_INFO.city}, {STUDIO_INFO.postcode}, {STUDIO_INFO.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f5adff] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f5adff] shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-headline text-sm font-semibold text-[#f5adff] uppercase tracking-wider mb-4">
              Hours
            </h4>
            <div className="text-xs text-[#d3c1d1] space-y-2">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Mon – Fri</span>
                <span className="text-white font-medium">10:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Saturday</span>
                <span className="text-[#d3c1d1]/60">Closed</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Sunday</span>
                <span className="text-[#d3c1d1]/60">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#d3c1d1]/70">
          <div className="font-headline text-sm font-bold tracking-tight text-[#e9dff0]">
            BARE BY NATURE
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <button onClick={() => onSelectTab('contact')} className="hover:text-[#f5adff] transition-colors cursor-pointer">
              Contact
            </button>
            <button onClick={() => onSelectTab('contact')} className="hover:text-[#f5adff] transition-colors cursor-pointer">
              Location
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5adff] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5adff] transition-colors"
            >
              Facebook
            </a>
          </div>
          <div>© {new Date().getFullYear()} BARE BY NATURE. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
