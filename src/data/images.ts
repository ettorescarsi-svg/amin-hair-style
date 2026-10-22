import man from '../assets/hair-0.webp';
import braid from '../assets/hair-1.webp';
import waves from '../assets/hair-2.webp';
import colour from '../assets/hair-3.webp';
import blonde from '../assets/hair-4.webp';
import { galleryImages } from '../../lib/salon';

const sources = [man, braid, waves, colour, blonde];
export const photographs = galleryImages.map((image, index) => ({
  ...image, src: sources[index],
}));
