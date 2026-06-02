import type { ContactFormData } from '../types';

export const contactFormData: ContactFormData = {
  title: "Ready to Start? Let's Talk.",
  subtitle: "Tell us what you need, and we'll get back to you soon.",
  namePlaceholder: 'Enter your name',
  emailPlaceholder: 'Enter your email',
  messagePlaceholder: 'Enter your message',
  servicesLabel: 'Services',
  services: [
    { id: 'web-development', label: 'Web Development' },
    { id: 'mobile-app-development', label: 'Mobile App Development' },
    { id: 'ui-ux-design', label: 'UI/UX Design' },
    { id: 'cloud-solutions', label: 'Cloud Solutions' },
    { id: 'software-development', label: 'Software Development' },
    { id: 'other', label: 'Other' },
  ],
  submitLabel: 'Send',
};
