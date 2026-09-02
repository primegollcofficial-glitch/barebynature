import React from 'react';
import { ArrowRight, Sparkles, Flower2, HeartHandshake, ShieldCheck } from 'lucide-react';
import { spaSuiteImg } from '../data/gallery';

interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  onBookService: (serviceId?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onBookService,
}) => {
  const formatPrice = (gbp: number) => {
    return `£${gbp}`;
  };

  return (
    <div id="home-screen-view" className="w-full relative z-10">
      {/* Hero Section with Full Background Cover */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 overflow-hidden">
        {/* Full-bleed background image with clear luxury visibility */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none">
          <img
            src={spaSuiteImg}
            alt="Bare By Nature Sanctuary Ambiance"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 opacity-60 sm:opacity-65 brightness-95 contrast-105 filter saturate-115 transition-transform duration-1000 ease-out"
          />
          {/* Subtle directional vignette: deep on text-left for crisp readability, open and luminous on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#16111d] via-[#16111d]/85 sm:via-[#16111d]/70 to-[#16111d]/60 sm:to-[#16111d]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16111d] via-transparent to-[#16111d]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_75%_40%,rgba(199,68,238,0.25),rgba(22,17,29,0.3))]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-12 w-full">
          <div className="max-w-2xl z-10 flex flex-col gap-5 sm:gap-7 md:gap-8 text-left">
            {/* Headline */}
            <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#ffffff] tracking-tight leading-[1.08] sm:leading-[1.06]">
              Enhance <br />
              Your <br />
              <span className="text-[#f5adff] drop-shadow-[0_0_30px_rgba(245,173,255,0.45)]">
                Natural Beauty
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#d3c1d1] max-w-lg leading-relaxed font-normal">
              Experience high-end luxury spa treatments and specialized intimate care in a private Sheffield environment designed for sensory indulgence and pure relaxation.
            </p>

            {/* CTA Buttons - fully responsive on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
              <button
                id="hero-book-appointment-btn"
                onClick={() => onBookService()}
                className="bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-[#ffffff] px-7 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide neon-glow neon-glow-hover transition-all duration-300 shadow-[0_0_30px_rgba(199,68,238,0.4)] cursor-pointer active:scale-95 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Sparkles className="w-4 h-4 text-[#fed6ff]" />
                <span>Book Appointment</span>
              </button>

              <button
                id="hero-view-services-btn"
                onClick={() => onSelectTab('services')}
                className="bg-[#231d2a]/80 hover:bg-[#38323f]/90 text-[#e9dff0] hover:text-[#f5adff] px-6 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide border border-white/15 hover:border-[#f5adff]/40 transition-all cursor-pointer flex items-center justify-center gap-2 backdrop-blur-md min-h-[48px]"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Treatments Section */}
      <section className="py-14 sm:py-20 md:py-28 max-w-6xl mx-auto px-5 sm:px-8 md:px-12 border-t border-white/5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold text-[#ffffff] mb-2 sm:mb-3 tracking-tight">
              Signature Treatments
            </h2>
            <p className="text-sm sm:text-base text-[#d3c1d1] max-w-md font-normal">
              Curated experiences tailored to elevate your natural essence.
            </p>
          </div>

          <button
            id="view-all-services-link"
            onClick={() => {
              onSelectTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[#f5adff] hover:text-[#fbd7ff] font-semibold text-sm md:text-base flex items-center gap-2 group cursor-pointer transition-colors py-1 min-h-[40px]"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2 Signature Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Full Body Revival */}
          <div
            id="sig-card-full-body-revival"
            className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] relative overflow-hidden group cursor-pointer active:scale-[0.99] transition-transform"
            onClick={() => onBookService('full-body-revival')}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8b2fa0]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-start mb-4 sm:mb-6 relative z-10">
              <div className="bg-[#f5adff]/15 border border-[#f5adff]/30 text-[#f5adff] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Signature
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#231d2a] border border-white/10 flex items-center justify-center text-[#f5adff] group-hover:scale-110 transition-transform">
                <Flower2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-[#ffffff] mb-2 group-hover:text-[#f5adff] transition-colors">
                Full Body Revival
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#d3c1d1] mb-5 sm:mb-6 line-clamp-2">
                A holistic approach to deep relaxation, combining organic oils and intuitive touch.
              </p>

              <div className="flex justify-between items-center border-t border-[#4f4350]/30 pt-4 sm:pt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d3c1d1]">
                  90 Minutes
                </span>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-[#f5adff]">
                    {formatPrice(150)}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white text-xs font-semibold shadow-[0_0_15px_rgba(199,68,238,0.3)]">
                    Book
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Intimate Waxing */}
          <div
            id="sig-card-intimate-waxing"
            className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] relative overflow-hidden group cursor-pointer active:scale-[0.99] transition-transform"
            onClick={() => onBookService('hollywood-wax')}
          >
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-[#9d01c6]/25 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-start mb-4 sm:mb-6 relative z-10">
              <div className="bg-[#f1afff]/15 border border-[#f1afff]/30 text-[#f1afff] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Specialty
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#231d2a] border border-white/10 flex items-center justify-center text-[#f1afff] group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-[#ffffff] mb-2 group-hover:text-[#f5adff] transition-colors">
                Intimate Waxing
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#d3c1d1] mb-5 sm:mb-6 line-clamp-2">
                Expert precision and premium hard waxes for a flawlessly smooth finish.
              </p>

              <div className="flex justify-between items-center border-t border-[#4f4350]/30 pt-4 sm:pt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d3c1d1]">
                  30 Minutes
                </span>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-[#f1afff]">
                    {formatPrice(55)}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white text-xs font-semibold shadow-[0_0_15px_rgba(199,68,238,0.3)]">
                    Book
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctuary Pillars / Trust Highlights */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-start gap-3.5 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#8b2fa0]/30 border border-[#f5adff]/20 flex items-center justify-center text-[#f5adff] shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="font-headline text-sm sm:text-base font-bold text-white mb-1">
                Zero Double-Dipping
              </h4>
              <p className="text-xs text-[#d3c1d1] leading-relaxed">
                Hospital-grade sanitary protocols with single-use sterile spatulas and medical-grade preparation.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-start gap-3.5 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#8b2fa0]/30 border border-[#f5adff]/20 flex items-center justify-center text-[#f5adff] shrink-0">
              <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="font-headline text-sm sm:text-base font-bold text-white mb-1">
                Pain-Minimizing Method
              </h4>
              <p className="text-xs text-[#d3c1d1] leading-relaxed">
                Advanced rapid technique combined with immediate pressure soothing for virtually pain-free waxing.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-start gap-3.5 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#8b2fa0]/30 border border-[#f5adff]/20 flex items-center justify-center text-[#f5adff] shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="font-headline text-sm sm:text-base font-bold text-white mb-1">
                Premium Hypoallergenic Wax
              </h4>
              <p className="text-xs text-[#d3c1d1] leading-relaxed">
                Infused with calming lavender, titanium dioxide, and soothing botanicals to prevent redness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
