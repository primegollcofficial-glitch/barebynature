import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ArrowRight, Camera, Flower2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';

interface GalleryViewProps {
  onBookService: (serviceId?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onBookService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'studio', label: 'Sanctuary Suites' },
    { id: 'treatments', label: 'Treatments & Technique' },
    { id: 'botanicals', label: 'Botanicals & Oils' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div id="gallery-screen-view" className="w-full relative z-10 pt-28 md:pt-36 pb-24">
      <main className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
            Inside Bare By Nature
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#d3c1d1] max-w-2xl mx-auto leading-relaxed">
            Take a look inside our private Sheffield studio, bespoke botanical formulas, and precision aesthetic treatments.
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex justify-start sm:justify-center mb-8 sm:mb-12 overflow-x-auto pb-3 no-scrollbar">
          <div className="glass-card rounded-full p-1.5 flex space-x-1.5 min-w-max mx-auto shadow-xl backdrop-blur-2xl bg-[#231d2a]/70 border border-white/15">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`gallery-cat-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer min-h-[40px] sm:min-h-[44px] flex items-center justify-center ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white shadow-[0_0_20px_rgba(199,68,238,0.4)]'
                      : 'text-[#d3c1d1] hover:text-white hover:bg-white/5 active:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => setActiveModalItem(item)}
              className={`glass-card glass-card-hover rounded-3xl overflow-hidden group cursor-pointer relative flex flex-col justify-between ${
                idx === 0 && selectedCategory === 'all' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              {/* Image with proper referrer policy */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#110c17]/95 via-[#110c17]/30 to-transparent pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#16111d]/80 text-[#f5adff] border border-white/10 backdrop-blur-md shadow-md">
                  {item.tag}
                </span>
              </div>

              {/* View Fullscreen icon button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-[#16111d]/80 text-white backdrop-blur-md border border-white/15">
                <Maximize2 className="w-4 h-4 text-[#f5adff]" />
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-[#f5adff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#d3c1d1] line-clamp-2 leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#f5adff] font-semibold">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-16 glass-card rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#f5adff]/25">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#8b2fa0]/30 border border-[#f5adff]/20 flex items-center justify-center text-[#f5adff] shrink-0">
              <Flower2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline text-xl font-bold text-white mb-1">
                Experience the Sanctuary in Person
              </h4>
              <p className="text-xs sm:text-sm text-[#d3c1d1]">
                Book your bespoke appointment at our private Sheffield studio.
              </p>
            </div>
          </div>
          <button
            onClick={() => onBookService()}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(199,68,238,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#fed6ff]" />
            <span>Book Appointment</span>
          </button>
        </div>
      </main>

      {/* Fullscreen Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-[#100d13]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="glass-card rounded-3xl overflow-hidden max-w-3xl w-full relative shadow-2xl border border-[#f5adff]/30 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#16111d]/85 text-[#d3c1d1] hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#110c17]">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#16111d]/90 text-[#f5adff] border border-[#f5adff]/30 shadow-md">
                  {activeModalItem.categoryLabel}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 bg-[#16111d]/95">
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-[#d3c1d1] leading-relaxed mb-6">
                {activeModalItem.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="text-xs text-[#d3c1d1]/80">
                  Private Suite in Sheffield, S21
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setActiveModalItem(null);
                      onBookService();
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(199,68,238,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#fed6ff]" />
                    <span>Book Session</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
