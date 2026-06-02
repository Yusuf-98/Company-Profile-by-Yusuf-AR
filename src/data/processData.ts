import type { ProcessHeader, ProcessStep } from '../types';

export const processHeader: ProcessHeader = {
  title: 'Our Process',
  description: 'Clear steps. Smart execution. Results you can count on.',
};

export const steps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    subtitle: 'Understand Your Needs & Goals',
    side: 'left',
  },
  {
    id: 2,
    title: 'Planning & Strategy',
    subtitle: 'Build a Clear, Scalable Roadmap',
    side: 'right',
  },
  {
    id: 3,
    title: 'Design & Prototyping',
    subtitle: 'Craft UX That Converts',
    side: 'left',
  },
  {
    id: 4,
    title: 'Development & Implementation',
    subtitle: 'Deliver With Speed & Precision',
    side: 'right',
  },
  {
    id: 5,
    title: 'Testing & Optimization',
    subtitle: 'Ensure Quality at Every Step',
    side: 'left',
  },
  {
    id: 6,
    title: 'Launch & Growth',
    subtitle: 'Scale, Measure & Improve Continuously',
    side: 'right',
  },
];
