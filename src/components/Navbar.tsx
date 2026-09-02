import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        id="main-top-navbar"
        className="fixed top-4 left-0 right-0 z-50 mx-auto w-[92%] max-w-6xl rounded-full bg-[#16111d]/85 backdrop-blur-2xl border border-white/15 shadow-[0_0_30px_rgba(157,1,198,0.25)] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300"
      >
        {/* Brand Logo with Circle Part Only */}
        <button
          id="nav-logo-btn"
          onClick={() => {
            onSelectTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group flex items-center gap-2.5 sm:gap-3 cursor-pointer focus:outline-none"
        >
          <Logo size={42} className="group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="font-headline text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#e9dff0] group-hover:text-[#f5adff] transition-colors leading-none">
              BARE BY NATURE
            </span>
            <span className="hidden sm:inline-block text-[9px] sm:text-[10px] tracking-[0.2em] text-[#f5adff]/80 uppercase mt-0.5 font-medium">
              Intimate Care Specialist
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => {
                  onSelectTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-[#f5adff] font-bold'
                    : 'text-[#d3c1d1] hover:text-[#f5adff]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f5adff] to-[#c744ee] rounded-full shadow-[0_0_8px_#f5adff]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Book Appointment CTA (Compact on small phones, full on larger) */}
          <button
            id="nav-book-cta"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-[#ffffff] px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide neon-glow neon-glow-hover transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(199,68,238,0.35)] min-h-[40px] sm:min-h-[44px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#fed6ff]" />
            <span className="hidden xs:inline sm:inline">Book Appointment</span>
            <span className="inline xs:hidden sm:hidden">Book</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#e9dff0] hover:text-[#f5adff] focus:outline-none cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-white/5 active:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#110c17]/98 backdrop-blur-3xl pt-24 px-6 sm:px-8 pb-10 flex flex-col justify-between lg:hidden animate-fade-in overflow-y-auto"
        >
          <div className="flex flex-col space-y-4 sm:space-y-6">
            <div className="font-headline text-xs tracking-widest uppercase text-[#f5adff]/70 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Sanctuary Navigation</span>
              <span className="text-[10px] text-[#d3c1d1]/50">Sheffield S21</span>
            </div>
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left text-xl sm:text-2xl font-headline font-semibold py-2.5 transition-colors flex items-center justify-between min-h-[48px] active:bg-white/5 px-2 rounded-xl ${
                    isActive ? 'text-[#f5adff] bg-white/[0.03]' : 'text-[#e9dff0]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#f5adff] shadow-[0_0_10px_#f5adff]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 mt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white font-semibold text-center shadow-[0_0_25px_rgba(199,68,238,0.4)] text-sm sm:text-base min-h-[48px] active:scale-98 transition-transform"
            >
              Book Appointment Now
            </button>
            <div className="text-center text-[11px] sm:text-xs text-[#d3c1d1]/70">
              Sheffield Studio • 10:00 AM – 8:00 PM • 07984 293954
            </div>
          </div>
        </div>
      )}
    </>
  );
};
