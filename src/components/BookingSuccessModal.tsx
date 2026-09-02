import React from 'react';
import { CheckCircle2, Calendar, Clock, MapPin, Sparkles, Download, X } from 'lucide-react';
import { BookingFormState } from '../types';
import { STUDIO_INFO } from '../data/services';

interface BookingSuccessModalProps {
  booking: BookingFormState;
  onClose: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  booking,
  onClose,
}) => {
  const refCode = `BN-${Math.floor(100000 + Math.random() * 900000)}`;

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Bare By Nature - ${booking.serviceName}`);
    const details = encodeURIComponent(
      `Appointment Reference: ${refCode}\nClient: ${booking.fullName}\nService: ${booking.serviceName} (${booking.durationFormatted})\nLocation: ${STUDIO_INFO.locationName}, ${STUDIO_INFO.city}, ${STUDIO_INFO.postcode}`
    );
    const location = encodeURIComponent(`${STUDIO_INFO.locationName}, ${STUDIO_INFO.city} ${STUDIO_INFO.postcode}`);
    
    // Format date string YYYYMMDDTHHmmssZ
    const dateParts = booking.date.replace(/-/g, '');
    const timeParts = booking.timeSlot.replace(':', '');
    const startIso = `${dateParts}T${timeParts}00`;
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startIso}/${startIso}`;
  };

  const formatPrice = (gbp: number) => {
    return `£${gbp}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#100d13]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fade-in overflow-y-auto">
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 max-w-lg w-full relative shadow-2xl border border-[#f5adff]/35 overflow-hidden my-auto">
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#8b2fa0]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#d3c1d1] hover:text-white transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#8b2fa0] to-[#c744ee] flex items-center justify-center text-white mx-auto mb-4 sm:mb-6 shadow-[0_0_30px_rgba(199,68,238,0.5)]">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
        </div>

        {/* Header */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5adff]/15 text-[#f5adff] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Appointment Reserved</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
            You are Booked in!
          </h2>
          <p className="text-xs text-[#d3c1d1] mt-1">
            Booking Ref: <span className="font-mono text-[#f5adff] font-bold">{refCode}</span>
          </p>
        </div>

        {/* Summary Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#1f1925]/70 border border-white/10 space-y-3 text-xs text-[#d3c1d1] mb-5 sm:mb-6">
          <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
            <span className="font-bold text-white text-xs sm:text-sm">{booking.serviceName}</span>
            <span className="font-bold text-[#f5adff] text-sm font-headline">
              {formatPrice(booking.priceGbp)}
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-white">
            <Calendar className="w-4 h-4 text-[#f5adff] shrink-0" />
            <span>{booking.date} at {booking.timeSlot}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#f5adff] shrink-0" />
            <span>Duration: {booking.durationFormatted}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#f5adff] shrink-0" />
            <span className="truncate">{STUDIO_INFO.locationName}, Sheffield ({STUDIO_INFO.postcode})</span>
          </div>
        </div>

        <p className="text-xs text-[#d3c1d1]/80 text-center mb-5 sm:mb-6 leading-relaxed">
          A confirmation summary has been sent to <span className="text-white font-medium break-all">{booking.email}</span>. We look forward to welcoming you to the sanctuary.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[44px]"
          >
            <Calendar className="w-4 h-4 text-[#f5adff]" />
            <span>Add to Calendar</span>
          </a>

          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white text-xs font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(199,68,238,0.4)] transition-transform active:scale-95 cursor-pointer text-center min-h-[44px]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
