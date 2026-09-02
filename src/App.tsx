import React, { useState } from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { GalleryView } from './components/GalleryView';
import { BookingHubView } from './components/BookingHubView';
import { ReviewsView } from './components/ReviewsView';
import { AboutView } from './components/AboutView';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { Toast } from './components/Toast';
import { BookingFormState } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>('hollywood-wax');
  const [lastCompletedBooking, setLastCompletedBooking] = useState<BookingFormState | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleBookService = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingComplete = (booking: BookingFormState) => {
    setLastCompletedBooking(booking);
    showToast('Appointment reserved successfully!');
  };

  return (
    <div className="relative min-h-screen bg-[#16111d] text-[#e9dff0] flex flex-col justify-between selection:bg-[#8b2fa0] selection:text-[#f9bdff]">
      {/* Animated WebGL & Canvas Ambient Background */}
      <BackgroundGlow />

      {/* Top Fixed Floating Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Primary Dynamic Screen View */}
      <div className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={setCurrentTab}
            onBookService={handleBookService}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onBookService={handleBookService}
          />
        )}

        {currentTab === 'gallery' && (
          <GalleryView
            onBookService={handleBookService}
          />
        )}

        {currentTab === 'contact' && (
          <BookingHubView
            initialServiceId={preselectedServiceId}
            onBookingComplete={handleBookingComplete}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'reviews' && (
          <ReviewsView
            onOpenBooking={handleOpenBooking}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onOpenBooking={handleOpenBooking}
            onSelectTab={setCurrentTab}
          />
        )}
      </div>

      {/* Global Sanctuary Footer */}
      <Footer
        onSelectTab={setCurrentTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Booking Confirmation Modal */}
      {lastCompletedBooking && (
        <BookingSuccessModal
          booking={lastCompletedBooking}
          onClose={() => setLastCompletedBooking(null)}
        />
      )}

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
