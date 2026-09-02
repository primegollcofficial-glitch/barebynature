import React, { useState } from 'react';
import { Flower2, Clock, ChevronDown, Sparkles, Check, Info } from 'lucide-react';
import { SERVICES_DATA, FAQ_ITEMS } from '../data/services';
import { ServiceCategory } from '../types';
import { glowingSkinImg } from '../data/gallery';

interface ServicesViewProps {
  onBookService: (serviceId: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onBookService,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    acc1: true,
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'signature', label: 'Signature Packages' },
    { id: 'intimate', label: 'Intimate Waxing' },
    { id: 'body', label: 'Body & Legs' },
    { id: 'facial', label: 'Facial & Details' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const formatPrice = (gbp: number, rawId?: string) => {
    if (rawId === 'nostrils-nipples') {
      return '£13 / £10';
    }
    return `£${gbp}`;
  };

  return (
    <div id="services-screen-view" className="w-full relative z-10 pt-28 md:pt-36 pb-20">
      <main className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Header Section */}
        <header className="text-center mb-8 sm:mb-12 flex flex-col items-center">
          {/* Title */}
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ffffff] mb-3 sm:mb-5 drop-shadow-[0_0_30px_rgba(157,1,198,0.35)] tracking-tight">
            Services & Pricing
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#d3c1d1] max-w-2xl mx-auto leading-relaxed">
            Experience precision, comfort, and absolute hygiene. Our advanced techniques ensure a smooth, flawless finish in an atmosphere of ultimate relaxation.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex justify-start sm:justify-center mb-8 sm:mb-14 overflow-x-auto pb-3 sm:pb-4 no-scrollbar">
          <div className="glass-card rounded-full p-1.5 flex space-x-1.5 min-w-max mx-auto shadow-xl backdrop-blur-2xl bg-[#231d2a]/70 border border-white/15">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-cat-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer min-h-[40px] sm:min-h-[44px] flex items-center justify-center ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white shadow-[0_0_20px_rgba(199,68,238,0.4)] border border-transparent'
                      : 'text-[#d3c1d1] hover:text-white hover:bg-white/5 border border-transparent active:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-24">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full group relative overflow-hidden active:scale-[0.99] transition-transform"
            >
              {/* Top Row: Title + Duration */}
              <div>
                <div className="flex justify-between items-start gap-3 sm:gap-4 mb-2.5 sm:mb-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                      <h3 className="font-headline text-lg sm:text-xl md:text-2xl font-bold text-[#ffffff] group-hover:text-[#f5adff] transition-colors">
                        {service.name}
                      </h3>
                      {service.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#8b2fa0]/40 text-[#f5adff] border border-[#f5adff]/30">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#d3c1d1] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Duration Chip */}
                  <div className="bg-[#8b2fa0]/30 border border-[#f5adff]/30 rounded-full px-2.5 sm:px-3 py-1 flex items-center shrink-0">
                    <Clock className="w-3 h-3 text-[#f5adff] mr-1" />
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#f5adff]">
                      {service.durationFormatted}
                    </span>
                  </div>
                </div>

                {/* Optional Service inclusions checklist */}
                {service.details && (
                  <div className="mt-3 sm:mt-4 pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {service.details.slice(0, 2).map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#d3c1d1]/80">
                        <Check className="w-3 h-3 text-[#f5adff] shrink-0" />
                        <span className="truncate">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Row: Price + Book Now Button */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 flex items-center justify-between border-t border-[#4f4350]/30">
                <div className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-[#ffffff] tracking-tight">
                  {formatPrice(service.priceGbp, service.id)}
                </div>

                <button
                  id={`book-now-${service.id}`}
                  onClick={() => onBookService(service.id)}
                  className="bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-[#ffffff] px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider neon-underglow neon-underglow-hover transition-all duration-300 shadow-[0_0_15px_rgba(199,68,238,0.35)] cursor-pointer active:scale-95 flex items-center gap-1.5 min-h-[44px]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#fed6ff]" />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* First Time Getting Waxed? FAQ / Aftercare Section */}
        <section
          id="waxing-guide-section"
          className="glass-card rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(157,1,198,0.25)] border border-[#f5adff]/25"
        >
          {/* Decorative blur blob */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8b2fa0]/25 rounded-full blur-[90px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Visual & Introduction */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5adff]/15 border border-[#f5adff]/30 text-[#f5adff] text-xs font-semibold uppercase tracking-widest mb-3">
                  <Info className="w-3.5 h-3.5" />
                  <span>Client Guide</span>
                </div>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#ffffff] mb-4">
                  First Time Getting Waxed?
                </h2>
                <p className="text-sm sm:text-base text-[#d3c1d1] mb-6 leading-relaxed">
                  It is normal to be nervous. We prioritize your comfort and use advanced techniques to minimize discomfort. Read our guide to ensure you are fully prepared.
                </p>
              </div>

              {/* Niche specific smooth skin image */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden glass-card relative group shadow-lg">
                <img
                  src={glowingSkinImg}
                  alt="A macro, softly lit image of glowing, healthy, smooth skin with a delicate water droplet in a luxury spa setting."
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16111d]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#16111d]/80 backdrop-blur-md border border-white/10 text-xs text-[#f5adff] flex items-center justify-between">
                  <span>Silky Smooth Results</span>
                  <span className="font-bold">Lasts 3–5 Weeks</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Accordion List */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              {FAQ_ITEMS.map((item) => {
                const isOpen = !!openAccordions[item.id];
                return (
                  <div
                    key={item.id}
                    className="border border-[#4f4350]/40 rounded-2xl bg-[#1f1925]/60 backdrop-blur-md overflow-hidden transition-all duration-300"
                  >
                    <button
                      id={`accordion-btn-${item.id}`}
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="font-headline text-lg sm:text-xl font-bold text-[#ffffff]">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#f5adff] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#fed6ff]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-[#d3c1d1] border-t border-white/5 leading-relaxed bg-[#231d2a]/40">
                        {item.points ? (
                          <ul className="list-disc pl-5 space-y-2 mt-2">
                            {item.points.map((pt, pIdx) => (
                              <li key={pIdx}>{pt}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-2">{item.text}</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
