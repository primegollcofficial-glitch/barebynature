import React, { useState } from 'react';
import { Star, Sparkles, CheckCircle2, MessageSquarePlus, Filter, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviews';
import { ReviewItem } from '../types';

interface ReviewsViewProps {
  onOpenBooking: () => void;
  onShowToast: (msg: string) => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({
  onOpenBooking,
  onShowToast,
}) => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTreatment, setNewTreatment] = useState('Hollywood Wax');
  const [newComment, setNewComment] = useState('');

  const treatmentFilters = ['All', 'Hollywood Wax', 'Gold Package', 'Full Body Revival', 'Brazilian Wax'];

  const filteredReviews = selectedFilter === 'All'
    ? reviewsList
    : reviewsList.filter((r) => r.treatment.toLowerCase().includes(selectedFilter.toLowerCase()));

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) {
      onShowToast('Please provide your name and feedback.');
      return;
    }

    const review: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      date: 'Just now',
      rating: newRating,
      treatment: newTreatment,
      comment: newComment,
      verified: true,
    };

    setReviewsList([review, ...reviewsList]);
    setIsModalOpen(false);
    setNewAuthor('');
    setNewComment('');
    onShowToast('Thank you for sharing your review!');
  };

  return (
    <div id="reviews-screen-view" className="w-full relative z-10 pt-28 md:pt-36 pb-24">
      <main className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-14">
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
            Client Testimonials
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#d3c1d1] max-w-2xl mx-auto leading-relaxed">
            Read honest impressions from our guests who visit Bare By Nature for intimate aesthetics, skin therapy, and soothing wellness.
          </p>
        </header>

        {/* Rating Overview Stats Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 shadow-2xl relative overflow-hidden border border-[#f5adff]/25">
          <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#8b2fa0]/25 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            {/* Big Score */}
            <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/10 pb-5 md:pb-0 md:pr-8">
              <div className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#f5adff] tracking-tight">
                4.98
              </div>
              <div className="flex items-center gap-1.5 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#f1afff] text-[#f1afff]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#d3c1d1]">
                Average rating from <span className="text-white font-bold">64+ client reviews</span>
              </p>
            </div>

            {/* Category Breakdown */}
            <div className="md:col-span-5 space-y-2.5 text-xs text-[#d3c1d1]">
              <div className="flex items-center justify-between">
                <span>Sanctuary Hygiene & Cleanliness</span>
                <span className="text-white font-bold">5.0 / 5.0</span>
              </div>
              <div className="w-full h-1.5 bg-[#231d2a] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8b2fa0] to-[#f5adff] w-full" />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span>Pain-Minimizing Comfort</span>
                <span className="text-white font-bold">4.9 / 5.0</span>
              </div>
              <div className="w-full h-1.5 bg-[#231d2a] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8b2fa0] to-[#f5adff] w-[98%]" />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span>Therapist Skill & Atmosphere</span>
                <span className="text-white font-bold">5.0 / 5.0</span>
              </div>
              <div className="w-full h-1.5 bg-[#231d2a] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8b2fa0] to-[#f5adff] w-full" />
              </div>
            </div>

            {/* Write a Review Button */}
            <div className="md:col-span-3 flex flex-col items-center md:items-end gap-2.5 sm:gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(199,68,238,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Write a Review</span>
              </button>
              <span className="text-[11px] text-[#d3c1d1]/60">Sheffield Studio Guests</span>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar">
          <Filter className="w-4 h-4 text-[#f5adff] shrink-0 mr-1" />
          {treatmentFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[38px] flex items-center justify-center ${
                selectedFilter === filter
                  ? 'bg-[#8b2fa0] text-white border border-[#f5adff]/50 shadow-sm'
                  : 'bg-[#231d2a]/60 text-[#d3c1d1] hover:text-white border border-white/5 active:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f1afff] text-[#f1afff]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#d3c1d1]/60">{rev.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#e9dff0] leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{rev.author}</span>
                  </div>
                  <div className="text-[11px] text-[#f5adff] font-medium mt-0.5">
                    {rev.treatment}
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white/5 text-[#f5adff]">
                  <ThumbsUp className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#100d13]/85 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
          <div className="glass-card rounded-3xl p-8 max-w-lg w-full relative shadow-2xl border border-[#f5adff]/30">
            <h3 className="font-headline text-2xl font-bold text-white mb-2">
              Share Your Experience
            </h3>
            <p className="text-xs text-[#d3c1d1] mb-6">
              Your feedback helps us continuously refine the sanctuary experience.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#d3c1d1] block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mia Thompson"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#16111d]/80 border border-[#4f4350]/40 focus:border-[#f5adff] focus:outline-none text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#d3c1d1] block mb-1.5">
                    Rating
                  </label>
                  <select
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-[#16111d]/80 border border-[#4f4350]/40 focus:border-[#f5adff] focus:outline-none text-white text-sm"
                  >
                    <option value={5}>5 Stars (Exceptional)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                    <option value={3}>3 Stars (Good)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#d3c1d1] block mb-1.5">
                    Treatment
                  </label>
                  <select
                    value={newTreatment}
                    onChange={(e) => setNewTreatment(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#16111d]/80 border border-[#4f4350]/40 focus:border-[#f5adff] focus:outline-none text-white text-sm"
                  >
                    <option value="Hollywood Wax">Hollywood Wax</option>
                    <option value="Gold Package">Gold Package</option>
                    <option value="Full Body Revival">Full Body Revival</option>
                    <option value="Brazilian Wax">Brazilian Wax</option>
                    <option value="Full Legs">Full Legs</option>
                    <option value="Underarms">Underarms</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#d3c1d1] block mb-1.5">
                  Your Review / Comment
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about the atmosphere, comfort, and results..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#16111d]/80 border border-[#4f4350]/40 focus:border-[#f5adff] focus:outline-none text-white text-sm resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#d3c1d1] hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(199,68,238,0.4)]"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
