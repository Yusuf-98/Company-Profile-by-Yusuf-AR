import type { IndustryData } from '../types';
import FintechImage from '../assets/images/fintech-industry.png';
import EcommerceImage from '../assets/images/e-commerce-industry.png';
import HeathcareImage from '../assets/images/healthcare-industry.png';

export const industry: IndustryData = {
  title: 'Built for Your Industry',
  description:
    'We’ve helped companies across industries launch smarter, faster, and more securely.',
  industries: [
    {
      id: 1,
      description:
        'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
      label: 'Fintech',
      image: FintechImage,
      imageAlt: 'Fintech Industry Image',
    },
    {
      id: 2,
      description:
        'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
      label: 'E-Commerce',
      image: EcommerceImage,
      imageAlt: 'E-commerce Industry Image',
    },
    {
      id: 3,
      description:
        'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
      label: 'Healthcare',
      image: HeathcareImage,
      imageAlt: 'Healthcare Industry Image',
    },
  ],
};
