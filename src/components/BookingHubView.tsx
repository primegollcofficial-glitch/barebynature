import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Calendar as CalendarIcon, 
  Sparkles, 
  ShieldCheck, 
  Copy, 
  ExternalLink,
  Check
} from 'lucide-react';
import { STUDIO_INFO, SERVICES_DATA } from '../data/services';
import { ServiceItem, BookingFormState } from '../types';

interface BookingHubViewProps {
  initialServiceId?: string;
  onBookingComplete: (booking: BookingFormState) => void;
  onShowToast: (msg: string) => void;
}

export const BookingHubView: React.FC<BookingHubViewProps> = ({
  initialServiceId,
  onBookingComplete,
  onShowToast,
}) => {
  // Stepper state (1, 2, 3)
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Category selection (Intimate, Packages, Body, Facial)
  const [selectedCategory, setSelectedCategory] = useState<'intimate' | 'signature' | 'body' | 'facial'>('intimate');
  
  // Selected service
  const [selectedService, setSelectedService] = useState<ServiceItem>(() => {
    if (initialServiceId) {
      const found = SERVICES_DATA.find((s) => s.id === initialServiceId);
      if (found) return found;
    }
    return SERVICES_DATA[2]; // Default to Hollywood Wax
  });

  // Calendar & Time state
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-04');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('14:30');

  // Client Details state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    isFirstTime: true,
    specialRequests: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);

  // When initialServiceId prop changes
  useEffect(() => {
    if (initialServiceId) {
      const found = SERVICES_DATA.find((s) => s.id === initialServiceId);
      if (found) {
        setSelectedService(found);
        if (found.category === 'signature') setSelectedCategory('signature');
        else if (found.category === 'intimate') setSelectedCategory('intimate');
        else if (found.category === 'body') setSelectedCategory('body');
        else if (found.category === 'facial') setSelectedCategory('facial');
      }
    }
  }, [initialServiceId]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const formatPrice = (gbp: number) => {
    return `£${gbp}`;
  };

  const categoryOptions = [
    {
      id: 'intimate' as const,
      title: 'INTIMATE',
      subtitle: 'Specialized discrete services (Hollywood, Brazilian, Bikini)',
      count: SERVICES_DATA.filter((s) => s.category === 'intimate').length,
    },
    {
      id: 'signature' as const,
      title: 'PACKAGES',
      subtitle: 'Curated comprehensive sessions (Gold Package, Body Revival)',
      count: SERVICES_DATA.filter((s) => s.category === 'signature').length,
    },
    {
      id: 'body' as const,
      title: 'BODY',
      subtitle: 'Full aesthetic treatments (Legs, Underarms, Maintenance)',
      count: SERVICES_DATA.filter((s) => s.category === 'body').length,
    },
    {
      id: 'facial' as const,
      title: 'FACIAL',
      subtitle: 'Delicate details & sensitive skin precision (Lip, Chin, Detailing)',
      count: SERVICES_DATA.filter((s) => s.category === 'facial').length,
    },
  ];

  const servicesForCategory = SERVICES_DATA.filter(
    (s) => s.category === selectedCategory
  );

  // Generate available dates
  const availableDates = [
    { day: 'Wed', dateNum: '2', fullDate: '2026-09-02', label: 'Today', available: true },
    { day: 'Thu', dateNum: '3', fullDate: '2026-09-03', label: 'Tomorrow', available: true },
    { day: 'Fri', dateNum: '4', fullDate: '2026-09-04', label: 'Popular', available: true },
    { day: 'Mon', dateNum: '7', fullDate: '2026-09-07', label: 'Open', available: true },
    { day: 'Tue', dateNum: '8', fullDate: '2026-09-08', label: 'Open', available: true },
    { day: 'Wed', dateNum: '9', fullDate: '2026-09-09', label: 'Open', available: true },
    { day: 'Thu', dateNum: '10', fullDate: '2026-09-10', label: 'Open', available: true },
  ];

  const timeSlots = [
    { time: '10:00 AM', slot: '10:00', period: 'Morning' },
    { time: '11:30 AM', slot: '11:30', period: 'Morning' },
    { time: '01:00 PM', slot: '13:00', period: 'Afternoon' },
    { time: '02:30 PM', slot: '14:30', period: 'Afternoon' },
    { time: '04:00 PM', slot: '16:00', period: 'Afternoon' },
    { time: '05:30 PM', slot: '17:30', period: 'Evening' },
    { time: '07:00 PM', slot: '19:00', period: 'Evening' },
  ];

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
        onShowToast('Please fill in your name, email, and phone number.');
        return;
      }

      const booking: BookingFormState = {
        serviceId: selectedService.id,
        serviceName: selectedService.name,
        priceGbp: selectedService.priceGbp,
        priceUsd: selectedService.priceUsd,
        durationFormatted: selectedService.durationFormatted,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        isFirstTime: formData.isFirstTime,
        specialRequests: formData.specialRequests,
      };

      onBookingComplete(booking);
    }
  };

  return (
    <div id="booking-hub-screen-view" className="w-full relative z-10 pt-28 md:pt-36 pb-24">
      <main className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Page Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#ffffff] mb-2 sm:mb-3 tracking-tight">
            Contact & Studio Booking
          </h1>
          <p className="text-sm sm:text-lg text-[#d3c1d1] max-w-2xl font-normal leading-relaxed">
            Secure your appointment and experience premium aesthetics in a revitalized setting.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column: Studio Info & Map (Order 2 on mobile, Order 1 on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 order-2 lg:order-1">
            {/* Contact Details Card */}
            <div className="glass-card rounded-3xl p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 relative overflow-hidden shadow-xl">
              <div className="absolute -top-16 -left-16 w-36 h-36 bg-[#8b2fa0]/25 blur-[50px] rounded-full pointer-events-none" />

              <h2 className="font-headline text-xl sm:text-2xl font-bold text-[#ffffff]">
                Get in Touch
              </h2>

              <div className="flex flex-col gap-4 sm:gap-5 text-sm text-[#d3c1d1]">
                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#231d2a] border border-white/10 flex items-center justify-center text-[#f5adff] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#ffffff] font-medium">{STUDIO_INFO.locationName}</p>
                    <p className="text-xs text-[#d3c1d1]/80 leading-relaxed">
                      {STUDIO_INFO.street}, {STUDIO_INFO.city}, {STUDIO_INFO.postcode}, {STUDIO_INFO.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#231d2a] border border-white/10 flex items-center justify-center text-[#f5adff] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="text-[#ffffff] hover:text-[#f5adff] font-medium transition-colors text-xs sm:text-sm"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(STUDIO_INFO.phone, 'Phone number')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#d3c1d1] transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                    title="Copy Phone"
                  >
                    {copiedField === 'Phone number' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#231d2a] border border-white/10 flex items-center justify-center text-[#f5adff] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="text-[#ffffff] hover:text-[#f5adff] font-medium transition-colors text-xs sm:text-sm truncate max-w-[180px] sm:max-w-none"
                    >
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(STUDIO_INFO.email, 'Email address')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#d3c1d1] transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                    title="Copy Email"
                  >
                    {copiedField === 'Email address' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#231d2a] border border-white/10 flex items-center justify-center text-[#f5adff] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs space-y-1">
                    <p className="text-white font-medium">{STUDIO_INFO.weekdayHours}</p>
                    <p className="text-[#d3c1d1]/60">{STUDIO_INFO.weekendHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Widget Card */}
            <div className="glass-card rounded-3xl overflow-hidden h-52 sm:h-64 relative group shadow-xl">
              {/* Hotlinked stylized map image */}
              <div
                className="bg-cover bg-center w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1W9R-ws7Uhf0cfltgauLX_OX8hpmi61GskPF1s6xfvnuQErkPJ7_92wekTzqXpn6ZpUW6Lp7hFeG7Akf2F43X6MBVfTxFDhBuhheX7p_sxiPmJvcejmORWAQbJsMuMZ37hjQ2-gpBvkSCGkZLwQDlXhBxAqyMZTOnxhNAWtSd7P80KTPkrr56t8w0YKckV0JqUgD901i-dh-xc-zCZ4aTPm99UdRwURcL8rKS6K_FgOfpj85TT-Zr')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110c17]/90 via-transparent to-transparent pointer-events-none" />

              {/* Map overlay controls */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                <div className="text-xs text-white">
                  <span className="font-bold text-[#f5adff]">Studio Pin:</span> Sheffield S21
                </div>
                <a
                  href="https://maps.google.com/?q=Sheffield+S21+1AH+United+Kingdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#8b2fa0]/80 hover:bg-[#8b2fa0] backdrop-blur-md text-xs font-semibold text-white transition-all shadow-md min-h-[36px]"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Step Interactive Booking Engine (Order 1 on mobile) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="glass-card rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col h-full relative shadow-2xl border border-[#f5adff]/25">
              {/* Stepper Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-10 relative">
                {/* Background Line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#38323f] z-0" />
                
                {/* Active Progress Line */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#8b2fa0] to-[#f5adff] z-0 transition-all duration-500"
                  style={{
                    width: step === 1 ? '16%' : step === 2 ? '50%' : '100%',
                  }}
                />

                {/* Step 1 indicator */}
                <button
                  onClick={() => setStep(1)}
                  className="relative z-10 flex flex-col items-center gap-1 cursor-pointer focus:outline-none min-h-[44px]"
                >
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      step >= 1
                        ? 'bg-[#8b2fa0] text-white shadow-[0_0_15px_#c744ee]'
                        : 'bg-[#2d2834] text-[#d3c1d1]'
                    }`}
                  >
                    1
                  </div>
                  <span
                    className={`text-[9px] sm:text-[11px] font-bold uppercase tracking-wider ${
                      step >= 1 ? 'text-[#f5adff]' : 'text-[#d3c1d1]/50'
                    }`}
                  >
                    Treatment
                  </span>
                </button>

                {/* Step 2 indicator */}
                <button
                  onClick={() => setStep(2)}
                  className="relative z-10 flex flex-col items-center gap-1 cursor-pointer focus:outline-none min-h-[44px]"
                >
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      step >= 2
                        ? 'bg-[#8b2fa0] text-white shadow-[0_0_15px_#c744ee]'
                        : 'bg-[#2d2834] text-[#d3c1d1]'
                    }`}
                  >
                    2
                  </div>
                  <span
                    className={`text-[9px] sm:text-[11px] font-bold uppercase tracking-wider ${
                      step >= 2 ? 'text-[#f5adff]' : 'text-[#d3c1d1]/50'
                    }`}
                  >
                    Date & Time
                  </span>
                </button>

                {/* Step 3 indicator */}
                <button
                  onClick={() => setStep(3)}
                  className="relative z-10 flex flex-col items-center gap-1 cursor-pointer focus:outline-none min-h-[44px]"
                >
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      step >= 3
                        ? 'bg-[#8b2fa0] text-white shadow-[0_0_15px_#c744ee]'
                        : 'bg-[#2d2834] text-[#d3c1d1]'
                    }`}
                  >
                    3
                  </div>
                  <span
                    className={`text-[9px] sm:text-[11px] font-bold uppercase tracking-wider ${
                      step >= 3 ? 'text-[#f5adff]' : 'text-[#d3c1d1]/50'
                    }`}
                  >
                    Confirm
                  </span>
                </button>
              </div>

              {/* STEP 1: SELECT CATEGORY & TREATMENT */}
              {step === 1 && (
                <div className="flex-1 flex flex-col animate-fade-in">
                  <h3 className="font-headline text-2xl font-bold text-[#ffffff] mb-2">
                    Choose Category
                  </h3>
                  <p className="text-xs text-[#d3c1d1] mb-6">
                    Select a treatment pillar to view specific tailored sessions.
                  </p>

                  {/* Category Radio Group matching Screenshot 3 */}
                  <div className="flex flex-col gap-3 mb-6">
                    {categoryOptions.map((cat) => {
                      const isSelected = selectedCategory === cat.id;
                      return (
                        <div
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            const firstInCat = SERVICES_DATA.find((s) => s.category === cat.id);
                            if (firstInCat) setSelectedService(firstInCat);
                          }}
                          className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                            isSelected
                              ? 'border-[#f5adff] bg-[#8b2fa0]/25 shadow-[0_0_20px_rgba(157,1,198,0.25)]'
                              : 'border-[#4f4350]/40 bg-[#1f1925]/50 hover:border-[#f5adff]/40 hover:bg-[#231d2a]/60'
                          }`}
                        >
                          <div>
                            <span className="font-headline text-sm font-bold uppercase tracking-wider text-white block mb-0.5">
                              {cat.title}
                            </span>
                            <span className="text-xs text-[#d3c1d1]">
                              {cat.subtitle}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 text-[#d3c1d1]">
                              {cat.count} options
                            </span>
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'border-[#f5adff] bg-[#f5adff] text-[#16111d]'
                                  : 'border-white/30'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Treatment sub-selection within chosen category */}
                  <div className="mt-2 mb-8">
                    <h4 className="font-headline text-sm font-bold uppercase tracking-wider text-[#f5adff] mb-3">
                      Select Specific Service in {selectedCategory.toUpperCase()}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto pr-1">
                      {servicesForCategory.map((serv) => {
                        const isChosen = selectedService.id === serv.id;
                        return (
                          <div
                            key={serv.id}
                            onClick={() => setSelectedService(serv)}
                            className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                              isChosen
                                ? 'border-[#f5adff] bg-[#8b2fa0]/35 text-white shadow-md'
                                : 'border-[#4f4350]/30 bg-[#16111d]/60 text-[#d3c1d1] hover:border-white/20'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-bold text-sm text-white">{serv.name}</span>
                              <span className="text-xs font-bold text-[#f5adff]">
                                {formatPrice(serv.priceGbp)}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-[#d3c1d1]/70">
                              <span>{serv.durationFormatted}</span>
                              {isChosen && <span className="text-[#f5adff] font-bold">Selected ✓</span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: PICK DATE & TIME */}
              {step === 2 && (
                <div className="flex-1 flex flex-col animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-[#ffffff]">
                        Pick Date & Time
                      </h3>
                      <p className="text-xs text-[#d3c1d1]">
                        Selected: <span className="text-[#f5adff] font-bold">{selectedService.name}</span> ({selectedService.durationFormatted})
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-white font-headline">
                        {formatPrice(selectedService.priceGbp)}
                      </span>
                    </div>
                  </div>

                  {/* Day Picker Horizontal Scroller */}
                  <div className="mb-6">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#d3c1d1] block mb-2.5">
                      Select Appointment Day
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:grid sm:grid-cols-7 no-scrollbar">
                      {availableDates.map((item) => {
                        const isDateSelected = selectedDate === item.fullDate;
                        return (
                          <button
                            key={item.fullDate}
                            onClick={() => setSelectedDate(item.fullDate)}
                            className={`p-2.5 sm:p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 min-w-[72px] sm:min-w-0 shrink-0 sm:shrink ${
                              isDateSelected
                                ? 'border-[#f5adff] bg-gradient-to-b from-[#8b2fa0] to-[#c744ee] text-white shadow-[0_0_15px_rgba(199,68,238,0.4)]'
                                : 'border-[#4f4350]/30 bg-[#1f1925]/60 text-[#d3c1d1] hover:border-[#f5adff]/40 active:bg-white/5'
                            }`}
                          >
                            <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                              {item.day}
                            </span>
                            <span className="text-base sm:text-lg font-bold font-headline">{item.dateNum}</span>
                            <span className="text-[9px] opacity-70 truncate">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots Selection */}
                  <div className="mb-6 sm:mb-8">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#d3c1d1] block mb-2.5">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                      {timeSlots.map((slot) => {
                        const isSlotSelected = selectedTimeSlot === slot.slot;
                        return (
                          <button
                            key={slot.slot}
                            onClick={() => setSelectedTimeSlot(slot.slot)}
                            className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-center transition-all cursor-pointer flex items-center justify-between min-h-[44px] ${
                              isSlotSelected
                                ? 'border-[#f5adff] bg-[#8b2fa0]/40 text-white shadow-md'
                                : 'border-[#4f4350]/30 bg-[#16111d]/70 text-[#d3c1d1] hover:border-white/20 active:bg-white/5'
                            }`}
                          >
                            <div className="text-left">
                              <div className="text-xs font-bold text-white">{slot.time}</div>
                              <div className="text-[10px] text-[#d3c1d1]/60">{slot.period}</div>
                            </div>
                            {isSlotSelected && <Check className="w-4 h-4 text-[#f5adff]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sanctuary Safety Note */}
                  <div className="p-4 rounded-2xl bg-[#231d2a]/50 border border-white/10 flex items-center gap-3 text-xs text-[#d3c1d1]">
                    <ShieldCheck className="w-5 h-5 text-[#f5adff] shrink-0" />
                    <span>
                      Private sanitized suite allocated. Buffer time included for sterile preparation.
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 3: CONFIRM DETAILS */}
              {step === 3 && (
                <div className="flex-1 flex flex-col animate-fade-in">
                  <h3 className="font-headline text-2xl font-bold text-[#ffffff] mb-1">
                    Client Details
                  </h3>
                  <p className="text-xs text-[#d3c1d1] mb-5">
                    Please provide your contact information to reserve this time slot.
                  </p>

                  <div className="space-y-4 mb-6">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#d3c1d1] block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#16111d]/80 border border-[#4f4350]/40 focus:border-[#f5adff] focus:outline-none text-white text-sm placeholder:text-[#d3c1d1]/40 transition-colors"
                      />
                    </div>

                    {/* Email & Phone grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-[#d3c1d1] block mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="eleanor@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#16111d]/80 border border-[#4f4350]/40 focus:border-[#f5adff] focus:outline-none text-white text-sm placeholder:text-[#d3c1d1]/40 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-[#d3c1d1] block mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="07984 293954"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#16111d]/80 border border-[#4f4350]/40 focus:border-[#f5adff] focus:outline-none text-white text-sm placeholder:text-[#d3c1d1]/40 transition-colors"
                        />
                      </div>
                    </div>

                    {/* First time client checkbox */}
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-[#231d2a]/40 border border-white/5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isFirstTime}
                        onChange={(e) => setFormData({ ...formData, isFirstTime: e.target.checked })}
                        className="w-4 h-4 rounded text-[#8b2fa0] focus:ring-[#f5adff] accent-[#8b2fa0]"
                      />
                      <span className="text-xs text-[#e9dff0]">
                        This is my first time getting waxed / visiting Bare By Nature
                      </span>
                    </label>

                    {/* Special Requests */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#d3c1d1] block mb-1.5">
                        Special Requests or Skin Sensitivities
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Any allergies, sensitive skin notes, or preferences..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#16111d]/80 border border-[#4f4350]/40 focus:border-[#f5adff] focus:outline-none text-white text-sm placeholder:text-[#d3c1d1]/40 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="p-4 rounded-2xl bg-[#8b2fa0]/20 border border-[#f5adff]/30 mb-4 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-white block">{selectedService.name}</span>
                      <span className="text-[#d3c1d1]">
                        {selectedDate} at {selectedTimeSlot} ({selectedService.durationFormatted})
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-bold text-[#f5adff] font-headline">
                        {formatPrice(selectedService.priceGbp)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Action Buttons */}
              <div className="mt-auto pt-5 sm:pt-6 flex items-center justify-between border-t border-[#4f4350]/30 gap-3 sm:gap-4">
                {step > 1 ? (
                  <button
                    onClick={() => setStep((prev) => (prev - 1) as 1 | 2)}
                    className="px-4 sm:px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#d3c1d1] hover:text-white bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5 sm:gap-2 cursor-pointer min-h-[44px]"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  id="booking-next-step-btn"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-[#8b2fa0] to-[#c744ee] text-white px-5 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(199,68,238,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <span>{step === 3 ? 'Confirm & Book Now' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
