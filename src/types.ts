export type ServiceCategory = 
  | 'all'
  | 'signature'
  | 'intimate'
  | 'body'
  | 'facial';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  durationMinutes: number;
  durationFormatted: string;
  priceGbp: number;
  priceUsd: number;
  description: string;
  isSignature?: boolean;
  isSpecialty?: boolean;
  badge?: string;
  iconName?: string;
  details?: string[];
}

export interface BookingFormState {
  serviceId: string;
  serviceName: string;
  priceGbp: number;
  priceUsd: number;
  durationFormatted: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  isFirstTime: boolean;
  specialRequests: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  treatment: string;
  comment: string;
  verified: boolean;
}

export interface StudioInfo {
  name: string;
  subtitle: string;
  locationName: string;
  street: string;
  city: string;
  postcode: string;
  country: string;
  phone: string;
  email: string;
  weekdayHours: string;
  weekendHours: string;
}
