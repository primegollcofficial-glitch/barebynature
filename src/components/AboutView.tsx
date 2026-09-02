import React from 'react';
import { Sparkles, ShieldCheck, Award, Leaf, Lock } from 'lucide-react';
import { lavenderWaxImg } from '../data/gallery';

interface AboutViewProps {
  onOpenBooking: () => void;
  onSelectTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking, onSelectTab }) => {
  return (
    <div id="about-screen-view" className="w-full relative z-10 pt-28 md:pt-36 pb-24">
      <main className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-16">
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
            Aesthetic Precision Meets Pure Indulgence
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#d3c1d1] max-w-2xl mx-auto leading-relaxed">
            Bare By Nature was founded to redefine intimate grooming and body aesthetics into a tranquil, deeply restorative ritual.
          </p>
        </header>

        {/* 2-Column Hero Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center mb-14 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
              Where Clinical Precision Feels Like a Luxury Retreat
            </h2>
            <p className="text-sm sm:text-base text-[#d3c1d1] leading-relaxed">
              We believe that aesthetic body care shouldn't feel rushed, clinical, or awkward. From our ambient lavender-lit suites and heated botanical stone therapy to our bespoke hypoallergenic waxes, every detail is engineered to soothe the nervous system.
            </p>
            <p className="text-sm sm:text-base text-[#d3c1d1] leading-relaxed">
              Our certified master aestheticians utilize proprietary non-strip hard waxing techniques that shrink-wrap the hair follicle rather than pulling on delicate skin layers, resulting in 80% less discomfort and zero skin lifting.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#231d2a]/60 border border-white/10">
                <div className="font-headline text-xl sm:text-2xl font-bold text-[#f5adff]">100%</div>
                <div className="text-[11px] sm:text-xs text-[#d3c1d1]">Zero Double-Dip Policy</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#231d2a]/60 border border-white/10">
                <div className="font-headline text-xl sm:text-2xl font-bold text-[#f5adff]">64+</div>
                <div className="text-[11px] sm:text-xs text-[#d3c1d1]">5-Star Studio Reviews</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card shadow-2xl relative group">
              <img
                src={lavenderWaxImg}
                alt="Bare By Nature precision wax technique"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16111d] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 rounded-2xl bg-[#16111d]/85 backdrop-blur-md border border-white/15">
                <span className="text-xs text-[#f5adff] font-bold block mb-0.5">Bare By Nature Studio</span>
                <span className="text-xs text-[#d3c1d1]">Private Treatment Suite in Sheffield, S21</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Sanctuary Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-20">
          <div className="glass-card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8b2fa0]/30 border border-[#f5adff]/20 flex items-center justify-center text-[#f5adff] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-lg font-bold text-white mb-2">
                Sterile Sanitation
              </h3>
              <p className="text-xs text-[#d3c1d1] leading-relaxed">
                Single-use wooden applicators, medical nitrile gloves, and hospital-grade sanitization between every client.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8b2fa0]/30 border border-[#f5adff]/20 flex items-center justify-center text-[#f5adff] mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-lg font-bold text-white mb-2">
                Pure Botanicals
              </h3>
              <p className="text-xs text-[#d3c1d1] leading-relaxed">
                Organic lavender, titanium dioxide, and soothing chamomile waxes formulated specifically for hypersensitive skin.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8b2fa0]/30 border border-[#f5adff]/20 flex items-center justify-center text-[#f5adff] mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-lg font-bold text-white mb-2">
                Discreet & Private
              </h3>
              <p className="text-xs text-[#d3c1d1] leading-relaxed">
                Dedicated private aesthetic suite with no overlapping waiting rooms, giving you complete confidentiality.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8b2fa0]/30 border border-[#f5adff]/20 flex items-center justify-center text-[#f5adff] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-lg font-bold text-white mb-2">
                Certified Mastery
              </h3>
              <p className="text-xs text-[#d3c1d1] leading-relaxed">
                Fully accredited aesthetician with continuous advanced certification in rapid intimate wax ergonomics.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
