import type { FooterData } from '../types';
import logoSrc from '../assets/icons/logo-large.png';
import facebookDarkIcon from '../assets/social-media/facebook-dark.png';
import instagramDarkIcon from '../assets/social-media/instagram-dark.png';
import linkedinDarkIcon from '../assets/social-media/linkedin-dark.png';
import tiktokDarkIcon from '../assets/social-media/tiktok-dark.png';
import facebookLightIcon from '../assets/social-media/facebook-light.png';
import instagramLightIcon from '../assets/social-media/instagram-light.png';
import linkedinLightIcon from '../assets/social-media/linkedin-light.png';
import tiktokLightIcon from '../assets/social-media/tiktok-light.png';

export const footerData: FooterData = {
  headline: "LET'S DISCUSS YOUR IDEAS",
  logoSrc,
  logoAlt: 'Your Logo',
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Service', href: '#service' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  socialItems: [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: { dark: facebookDarkIcon, light: facebookLightIcon },
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: { dark: instagramDarkIcon, light: instagramLightIcon },
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: { dark: linkedinDarkIcon, light: linkedinLightIcon },
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com',
      icon: { dark: tiktokDarkIcon, light: tiktokLightIcon },
    },
  ],
};
