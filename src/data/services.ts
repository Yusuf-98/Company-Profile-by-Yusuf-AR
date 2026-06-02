import type { ServiceCardData } from '../types';
import WebDevIcon from '../assets/icons/web-development.png';
import MobileIcon from '../assets/icons/mobile-app-development.png';
import UiUxIcon from '../assets/icons/ui-ux-design.png';
import CloudIcon from '../assets/icons/cloud-solutions.png';
import SoftwareDevIcon from '../assets/icons/software-development.png';
import ItInfrastructureIcon from '../assets/icons/it-infrastructure.png';
import CyberIcon from '../assets/icons/cybersecurity-services.png';
import QaIcon from '../assets/icons/qa-solutions.png';
import ItConsultIcon from '../assets/icons/it-consulting-support.png';

export const services: ServiceCardData = {
  title: 'Smart IT Solutions That Grow With You',
  description: 'Tailored tech to boost efficiency, security, and results.',
  list: [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build fast, scalable, and SEO-friendly websites.',
      icon: WebDevIcon,
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native & cross-platform apps tailored to user needs.',
      icon: MobileIcon,
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Delight users with intuitive and beautiful interfaces.',
      icon: UiUxIcon,
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Secure and flexible cloud infrastructure for your growth.',
      icon: CloudIcon,
    },
    {
      id: 5,
      title: 'Software Development',
      description: 'Custom solutions built around your business logic.',
      icon: SoftwareDevIcon,
    },
    {
      id: 6,
      title: 'IT Infrastructure',
      description: 'Scale your backend with reliable tech foundations.',
      icon: ItInfrastructureIcon,
    },
    {
      id: 7,
      title: 'Cybersecurity Services',
      description: 'Stay protected with enterprise-grade security.',
      icon: CyberIcon,
    },
    {
      id: 8,
      title: 'QA Solutions',
      description: 'Ensure performance with rigorous testing frameworks.',
      icon: QaIcon,
    },
    {
      id: 9,
      title: 'IT Consulting & Support',
      description: 'Make smarter tech decisions with expert guidance.',
      icon: ItConsultIcon,
    },
  ],
};
