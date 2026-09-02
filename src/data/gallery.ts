import spaSuiteImg from '../assets/images/luxury_spa_suite_1788347675630.jpg';
import lavenderWaxImg from '../assets/images/lavender_hard_wax_1788347689798.jpg';
import botanicalOilsImg from '../assets/images/botanical_oils_stones_1788347704707.jpg';
import glowingSkinImg from '../assets/images/smooth_glowing_skin_1788347720901.jpg';
import spaLoungeImg from '../assets/images/spa_lounge_interior_1788347737363.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'studio' | 'treatments' | 'botanicals';
  categoryLabel: string;
  image: string;
  aspectRatio: string;
  description: string;
  tag: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Private Treatment Suite',
    category: 'studio',
    categoryLabel: 'Sanctuary Space',
    image: spaSuiteImg,
    aspectRatio: '16/9',
    description: 'Ambient lavender-lit private suite equipped with heated treatment bed and sterile preparation.',
    tag: 'Private Room',
  },
  {
    id: 'gal-2',
    title: 'Lavender Hard Wax Precision',
    category: 'treatments',
    categoryLabel: 'Technique',
    image: lavenderWaxImg,
    aspectRatio: '4/3',
    description: 'Hypoallergenic lavender stripless wax application designed for gentle root-capture and zero skin pulling.',
    tag: 'Signature Method',
  },
  {
    id: 'gal-3',
    title: 'Botanical Oils & Hot Stone Therapy',
    category: 'botanicals',
    categoryLabel: 'Botanicals',
    image: botanicalOilsImg,
    aspectRatio: '4/3',
    description: 'Soothing chamomile and cold-pressed botanical infusions paired with basalt stones for post-treatment calm.',
    tag: 'Organic Aftercare',
  },
  {
    id: 'gal-4',
    title: 'Silky Radiance & Results',
    category: 'treatments',
    categoryLabel: 'Results',
    image: glowingSkinImg,
    aspectRatio: '4/3',
    description: 'Flawlessly smooth, hydrated skin with our specialized post-wax calming serum and hydration mist.',
    tag: 'Skin Glow',
  },
  {
    id: 'gal-5',
    title: 'Sanctuary Reception & Herbal Bar',
    category: 'studio',
    categoryLabel: 'Sanctuary Space',
    image: spaLoungeImg,
    aspectRatio: '4/3',
    description: 'Our serene arrival area offering complimentary organic herbal teas and tranquil soundscapes.',
    tag: 'Lounge',
  },
];

export { spaSuiteImg, lavenderWaxImg, botanicalOilsImg, glowingSkinImg, spaLoungeImg };
