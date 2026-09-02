import { ServiceItem, StudioInfo } from '../types';

export const STUDIO_INFO: StudioInfo = {
  name: 'Bare By Nature',
  subtitle: 'Luxury Spa & Aesthetic Sanctuary',
  locationName: 'Perfect Angle Aesthetics',
  street: 'The Hatchery Creative Studio, 134 Arundel St',
  city: 'Sheffield',
  postcode: 'S21 1AH',
  country: 'United Kingdom',
  phone: '07984293954',
  email: 'barebynature@outlook.com',
  weekdayHours: 'Monday – Friday: 10:00 AM – 8:00 PM',
  weekendHours: 'Saturday & Sunday: Closed',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gold-package',
    name: 'Gold Package',
    category: 'signature',
    categoryLabel: 'Signature Packages',
    durationMinutes: 90,
    durationFormatted: '90 MINS',
    priceGbp: 100,
    priceUsd: 130,
    description: 'The ultimate full-body smoothing experience. Includes full legs, full arms, underarms, and a Brazilian or Hollywood wax.',
    isSignature: true,
    badge: 'Signature',
    iconName: 'sparkles',
    details: [
      'Full Legs and Full Arms hair removal',
      'Underarms detailing and soothing oil infusion',
      'Choice of Brazilian or Hollywood Wax',
      'Post-wax cooling botanical mist application'
    ]
  },
  {
    id: 'full-body-revival',
    name: 'Full Body Revival',
    category: 'signature',
    categoryLabel: 'Signature Packages',
    durationMinutes: 90,
    durationFormatted: '90 MINS',
    priceGbp: 150,
    priceUsd: 195,
    description: 'A holistic approach to deep relaxation, combining organic oils and intuitive touch in a sensory ambient suite.',
    isSignature: true,
    badge: 'Signature',
    iconName: 'spa',
    details: [
      'Custom warm organic botanical oils',
      'Aromatherapy pressure point release',
      'Heated obsidian stone therapy integration',
      'Deep sensory tension unwind'
    ]
  },
  {
    id: 'hollywood-wax',
    name: 'Hollywood Wax',
    category: 'intimate',
    categoryLabel: 'Intimate Waxing',
    durationMinutes: 30,
    durationFormatted: '30 MINS',
    priceGbp: 55,
    priceUsd: 70,
    description: 'Complete hair removal from front to back, including the labia and peri-anal area. Absolute smoothness guaranteed.',
    isSpecialty: true,
    badge: 'Specialty',
    iconName: 'self_improvement',
    details: [
      'Hypoallergenic lavender-infused hot wax',
      'Zero strip irritation technique',
      'Complete front-to-back smoothness',
      'Calming aloe and azulene recovery gel'
    ]
  },
  {
    id: 'brazilian-wax',
    name: 'Brazilian Wax',
    category: 'intimate',
    categoryLabel: 'Intimate Waxing',
    durationMinutes: 30,
    durationFormatted: '30 MINS',
    priceGbp: 55,
    priceUsd: 70,
    description: 'Leaves a neat strip or triangle at the front, while removing all hair from the labia and peri-anal area.',
    badge: 'Popular',
    iconName: 'star',
    details: [
      'Precision shaping strip or landing strip',
      'Gentle peel-off hard wax formula',
      'Full peri-anal tidy up included',
      'Soothing tea tree and chamomile finish'
    ]
  },
  {
    id: 'g-string-wax',
    name: 'G-String Wax',
    category: 'intimate',
    categoryLabel: 'Intimate Waxing',
    durationMinutes: 25,
    durationFormatted: '25 MINS',
    priceGbp: 40,
    priceUsd: 52,
    description: 'A high, tight bikini wax that removes hair from the sides and top, extending slightly deeper into the bikini line.',
    iconName: 'scissors',
    details: [
      'High cut bikini line definition',
      'Top and inner curve precision',
      'Sensitive skin formulation'
    ]
  },
  {
    id: 'bikini-wax',
    name: 'Bikini Wax',
    category: 'intimate',
    categoryLabel: 'Intimate Waxing',
    durationMinutes: 25,
    durationFormatted: '25 MINS',
    priceGbp: 40,
    priceUsd: 52,
    description: 'A classic tidy-up removing hair from the sides and top, just outside the panty line for a clean look.',
    iconName: 'feather',
    details: [
      'Classic tidy along panty contour',
      'Clean top line definition',
      'Gentle natural wax'
    ]
  },
  {
    id: 'the-crack',
    name: 'The Crack',
    category: 'intimate',
    categoryLabel: 'Intimate Waxing',
    durationMinutes: 15,
    durationFormatted: '15 MINS',
    priceGbp: 20,
    priceUsd: 26,
    description: 'Focuses solely on the peri-anal area for a smooth, hygienic finish. Often added to basic bikini waxes.',
    iconName: 'zap',
    details: [
      'Fast, gentle peri-anal wax',
      'Optimal hygiene and comfort',
      'Quick 15-minute express treatment'
    ]
  },
  {
    id: 'full-legs',
    name: 'Full Legs',
    category: 'body',
    categoryLabel: 'Body & Legs',
    durationMinutes: 30,
    durationFormatted: '30 MINS',
    priceGbp: 45,
    priceUsd: 58,
    description: 'Comprehensive hair removal from the top of the thighs down to the ankles, including toes if desired.',
    iconName: 'activity',
    details: [
      'Upper thighs to ankles coverage',
      'Includes knee caps and feet/toes',
      'Silky long-lasting hydration seal'
    ]
  },
  {
    id: 'half-legs',
    name: 'Half Legs',
    category: 'body',
    categoryLabel: 'Body & Legs',
    durationMinutes: 20,
    durationFormatted: '20 MINS',
    priceGbp: 25,
    priceUsd: 32,
    description: 'Hair removal from just above the knee down to the ankles, leaving your lower legs perfectly smooth.',
    iconName: 'sun',
    details: [
      'Knee to ankle full coverage',
      'Leaves skin glowing and soft',
      'Perfect for quick maintenance'
    ]
  },
  {
    id: 'underarms',
    name: 'Underarms',
    category: 'body',
    categoryLabel: 'Body & Legs',
    durationMinutes: 10,
    durationFormatted: '10 MINS',
    priceGbp: 15,
    priceUsd: 20,
    description: 'Quick, gentle, and effective removal of all underarm hair for long-lasting freshness.',
    iconName: 'wind',
    details: [
      'Fast 10-minute turnaround',
      'Prevents ingrown hairs and darkening',
      'Sensitive cooling finish'
    ]
  },
  {
    id: 'maintenance-wax',
    name: 'Maintenance Wax',
    category: 'body',
    categoryLabel: 'Body & Legs',
    durationMinutes: 20,
    durationFormatted: '20 MINS',
    priceGbp: 30,
    priceUsd: 38,
    description: 'A targeted follow-up session for existing clients within 4–6 weeks of their last appointment.',
    badge: 'Loyalty',
    iconName: 'clock',
    details: [
      'For returning clients (4-6 weeks interval)',
      'Quick touch-up and follicle soothing',
      'Exclusive loyalty pricing'
    ]
  },
  {
    id: 'upper-lip-chin',
    name: 'Upper Lip & Chin',
    category: 'facial',
    categoryLabel: 'Facial & Details',
    durationMinutes: 15,
    durationFormatted: '15 MINS',
    priceGbp: 20,
    priceUsd: 26,
    description: 'Delicate facial waxing using specialized soft wax designed for sensitive skin, leaving a flawless finish.',
    iconName: 'smile',
    details: [
      'Gentle facial wax designed for sensitive skin',
      'Upper lip perimeter & chin contour',
      'Redness-calming botanical serum'
    ]
  },
  {
    id: 'nostrils-nipples',
    name: 'Nostrils / Nipples',
    category: 'facial',
    categoryLabel: 'Facial & Details',
    durationMinutes: 10,
    durationFormatted: '10 MINS',
    priceGbp: 13,
    priceUsd: 17,
    description: 'Quick, precise detailing for small areas. Hard wax is used for nostrils, gentle soft wax for the areola (£13 / £10).',
    iconName: 'target',
    details: [
      'Discreet and rapid detailing',
      'Nostril edge cleanup (£13)',
      'Gentle areola wax (£10)'
    ]
  }
];

export const FAQ_ITEMS = [
  {
    id: 'acc1',
    title: 'Preparation Tips',
    points: [
      'Hair should be at least 1/4 inch long (about the size of a grain of rice) for the wax to grip effectively.',
      'Exfoliate gently 24–48 hours before your appointment to remove dead skin cells.',
      'Avoid caffeine and alcohol on the day of treatment, as they can heighten skin sensitivity.',
      'Wear loose, comfortable breathable cotton clothing to your appointment.'
    ]
  },
  {
    id: 'acc2',
    title: 'Pain-Relief Advice',
    text: 'Take an ibuprofen or your preferred over-the-counter pain reliever about 30–45 minutes before your appointment. Practice deep breathing during the service. Our therapists are trained in rapid-flick and immediate pressure application to soothe nerve endings instantly.'
  },
  {
    id: 'acc3',
    title: 'Post-Wax Aftercare',
    points: [
      'No hot baths, saunas, steam rooms, or intense sweaty workouts for 24–48 hours.',
      'Avoid tight clothing that causes friction across treated areas.',
      'Wait 48 hours before gently exfoliating the area to prevent ingrown hairs.',
      'Moisturize daily with a soothing, non-comedogenic lotion or pure organic aloe vera.'
    ]
  },
  {
    id: 'acc4',
    title: 'Hygiene & Sanctuary Standards',
    text: 'We adhere to clinical medical-grade sanitation. We strictly enforce a Zero Double-Dipping policy with disposable wooden spatulas, medical-grade hospital sanitizers for all surfaces, and sterile nitrile gloves throughout every procedure.'
  }
];
