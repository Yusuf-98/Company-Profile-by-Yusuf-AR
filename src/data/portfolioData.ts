import type { PortfolioData } from '../types';
import portfolio1 from '../assets/images/portfolio-1.png';
import portfolio2 from '../assets/images/portfolio-2.png';
import portfolio3 from '../assets/images/portfolio-3.png';

export const portfolioData: PortfolioData = {
  title: "From Vision to Launch! Projects We're Proud Of",
  subtitle:
    'Take a closer look at our recent work powering startups, enterprises, and everything in between.',
  portfolioList: [
    {
      id: 1,
      category: 'Landing Page',
      label: 'Portofolio 1',
      image: portfolio1,
      alt: 'Crop Image of Portfolio 1',
    },
    {
      id: 2,
      category: 'Landing Page',
      label: 'Portofolio 2',
      image: portfolio2,
      alt: 'Crop Image of Portfolio 2',
    },
    {
      id: 3,
      category: 'Landing Page',
      label: 'Portofolio 3',
      image: portfolio3,
      alt: 'Crop Image of Portfolio 3',
    },
  ],
};
