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
      detail: {
        longDescription:
          'Fast, secure, SEO-optimized websites built with modern frameworks like React and Next.js. We engineer around Core Web Vitals because speed compounds — a 1-second delay alone can cut conversions by up to 7%.',
        highlights: [
          'Responsive, pixel-perfect UI across all devices',
          'Core Web Vitals & SEO-first architecture',
          'API integrations & headless CMS support',
          'Ongoing performance monitoring & maintenance',
        ],
        metrics: [
          { label: 'Conversion rate at sub-1s load time', value: 39, display: '39%' },
          { label: 'Mobile visitors who abandon 3s+ loads', value: 53, display: '53%' },
          { label: 'Core Web Vitals pass rate we target', value: 95, display: '95%+' },
        ],
      },
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native & cross-platform apps tailored to user needs.',
      icon: MobileIcon,
      detail: {
        longDescription:
          'Native and cross-platform apps built with React Native and Flutter — engineered for stability and shipped faster without sacrificing quality on iOS and Android alike.',
        highlights: [
          'Single codebase for iOS & Android',
          'Offline-first & push notification support',
          'App Store & Play Store deployment handled',
          'Crash monitoring & stability tracking post-launch',
        ],
        metrics: [
          { label: 'Crash-free sessions we target', value: 100, display: '99.5%+' },
          { label: 'Faster time-to-market (cross-platform)', value: 40, display: '~40% faster' },
          { label: 'Crash-free rate behind 4.5★+ ratings', value: 100, display: '~99.85%' },
        ],
      },
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Delight users with intuitive and beautiful interfaces.',
      icon: UiUxIcon,
      detail: {
        longDescription:
          'User research, wireframes, and high-fidelity prototypes that turn complex workflows into interfaces people actually enjoy using — design decisions backed by usability testing, not guesswork.',
        highlights: [
          'User research & usability testing',
          'Interactive, high-fidelity Figma prototypes',
          'Design systems built for scale',
          'Accessibility (WCAG) compliant by default',
        ],
        metrics: [
          { label: 'Typical conversion rate lift from UX work', value: 100, display: '200–400%' },
          { label: 'Development rework reduced', value: 50, display: '~50%' },
          { label: 'Support cost reduction', value: 33, display: '~33%' },
        ],
      },
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Secure and flexible cloud infrastructure for your growth.',
      icon: CloudIcon,
      detail: {
        longDescription:
          'Secure, auto-scaling cloud infrastructure on AWS, GCP, or Azure — architected with cost governance in mind, so your infrastructure spend scales with real usage, not waste.',
        highlights: [
          'Infrastructure as Code (Terraform)',
          'Auto-scaling & load balancing',
          'Disaster recovery & automated backups',
          'Ongoing cost optimization audits (FinOps)',
        ],
        metrics: [
          { label: 'Infrastructure cost savings after migration', value: 30, display: '20–30%' },
          { label: 'Average ROI per $1 spent on cloud', value: 100, display: '$3.86 return' },
          { label: 'Uptime SLA we design for', value: 99, display: '99.9%+' },
        ],
      },
    },
    {
      id: 5,
      title: 'Software Development',
      description: 'Custom solutions built around your business logic.',
      icon: SoftwareDevIcon,
      detail: {
        longDescription:
          'Custom software tailored to your exact business logic — from internal tools to full-scale platforms — built with clean architecture and the delivery discipline most teams struggle with.',
        highlights: [
          'Custom architecture aligned to your workflow',
          'Legacy & third-party system integration',
          'Automated test coverage from day one',
          'Full documentation & knowledge transfer',
        ],
        metrics: [
          { label: 'Code coverage we maintain', value: 85, display: '80–90%' },
          { label: 'On-time delivery rate with strong PM discipline', value: 63, display: '63%+' },
          { label: 'Cheaper to fix bugs caught in design vs. production', value: 100, display: 'Up to 100x' },
        ],
      },
    },
    {
      id: 6,
      title: 'IT Infrastructure',
      description: 'Scale your backend with reliable tech foundations.',
      icon: ItInfrastructureIcon,
      detail: {
        longDescription:
          'Reliable backend foundations — servers, networking, and CI/CD pipelines — engineered so deployments are routine, not risky, and your team ships faster with confidence.',
        highlights: [
          'CI/CD pipeline setup & automation',
          'Containerization with Docker & Kubernetes',
          'Network security & continuous monitoring',
          '24/7 infrastructure monitoring & alerting',
        ],
        metrics: [
          { label: 'How much more often elite teams deploy', value: 100, display: '200x+ more' },
          { label: 'Faster recovery from failed deployments', value: 100, display: '1,000x+ faster' },
          { label: 'Lead time for changes we design for', value: 100, display: '<1 day' },
        ],
      },
    },
    {
      id: 7,
      title: 'Cybersecurity Services',
      description: 'Stay protected with enterprise-grade security.',
      icon: CyberIcon,
      detail: {
        longDescription:
          'Proactive security audits, penetration testing, and monitoring — because the industry-average breach takes 277 days to detect and contain. We build detection and response into your systems from the start.',
        highlights: [
          'Vulnerability assessments & penetration testing',
          'Compliance support (ISO 27001, SOC 2)',
          '24/7 threat monitoring & incident response',
          'Employee security awareness training',
        ],
        metrics: [
          { label: 'Mature SOC detection time vs. industry average', value: 100, display: '<30 days vs. 277' },
          { label: 'Faster response with automated detection', value: 50, display: '50%+ faster' },
          { label: 'Compliance frameworks we support', value: 100, display: 'ISO 27001, SOC 2' },
        ],
      },
    },
    {
      id: 8,
      title: 'QA Solutions',
      description: 'Ensure performance with rigorous testing frameworks.',
      icon: QaIcon,
      detail: {
        longDescription:
          'Rigorous manual and automated testing across every release, catching what most teams miss before it reaches production — where the same bug costs far more to fix.',
        highlights: [
          'Automated regression test suites',
          'Cross-browser & cross-device testing',
          'Performance & load testing',
          'Detailed bug tracking & reporting',
        ],
        metrics: [
          { label: 'Code coverage considered strong', value: 85, display: '80–90%' },
          { label: 'Production bugs reduced after QA improvements', value: 70, display: '60–80%' },
          { label: 'Cheaper to catch bugs before release', value: 100, display: 'Up to 100x' },
        ],
      },
    },
    {
      id: 9,
      title: 'IT Consulting & Support',
      description: 'Make smarter tech decisions with expert guidance.',
      icon: ItConsultIcon,
      detail: {
        longDescription:
          'Strategic technology guidance to help you make confident decisions — from tech stack choices to team scaling — backed by hands-on support when you actually need it.',
        highlights: [
          'Technology roadmap & stack recommendations',
          'Vendor & tooling evaluation',
          'Team augmentation & technical mentoring',
          'Ongoing support with guaranteed response times',
        ],
        metrics: [
          { label: 'Client retention rate we target', value: 90, display: '90%+' },
          { label: 'Profit lift from a 5% retention gain', value: 95, display: 'Up to 95%' },
          { label: 'Cost to acquire vs. retain a client', value: 100, display: '5–25x more' },
        ],
      },
    },
  ],
};
