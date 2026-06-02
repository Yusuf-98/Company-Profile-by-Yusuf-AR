import React from 'react';
/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */

/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
// export interface ButtonProps {
//   variant?: ButtonVariant;
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }

/**
 * Button types
 */
export type ButtonSize = 'sm' | 'md';
export type ButtonBg = 'orange' | 'white';

export interface ButtonProps {
  size: ButtonSize;
  background: ButtonBg;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
}

// ==========================================
// Home Types
// ==========================================

/**
 * Navigation menu types
 */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Logo types
 */
export interface LogoProps {
  title: string;
  description?: string;
  logo?: string;
  onClick?: () => void;
}

/**
 * Hero types
 */
export interface HeroProps {
  title: string;
  titleSpan: string;
  description: string;
  image?: string;
}

// ==========================================
// About section Types
// ==========================================

/**
 * Partner types
 */
export interface PartnerItem {
  id: number;
  label: string;
  logo: string;
}

export interface Partners {
  title: string;
  partners: PartnerItem[];
  className?: '';
}

/**
 * Stat Items types
 */
export interface StatProps {
  id: number;
  value: string;
  label: string;
}

export interface StatData {
  title: string;
  description: string;
  list: StatProps[];
}

/**
 * Process step types
 */
export interface ProcessHeader {
  title: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  side: 'left' | 'right';
}

export interface StepCardProps {
  step: ProcessStep;
  active: boolean;
  isMobile: boolean;
  bubbleRef?: React.Ref<HTMLDivElement>;
  onToggle?: () => void;
}

// ==========================================
// Service Section Types
// ==========================================

/**
 * Services types
 */
export interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCardData {
  title: string;
  description: string;
  list: ServiceCardProps[];
}

/**
 * Industry types
 */
export interface IndustryProps {
  id: number;
  label?: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface IndustryData {
  title: string;
  description: string;
  industries: IndustryProps[];
}

// ==========================================
// Portfolio Section Types
// ==========================================

/**
 * Portfolio types
 */
export interface PortfolioProps {
  id: number;
  category: string;
  label: string;
  image: string;
  alt: string;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  portfolioList: PortfolioProps[];
}

// ==========================================
// Testimonial Section Types
// ==========================================

/**
 * Testimonial types
 */
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar?: string;
  rating: number;
}

export interface TestimonialData {
  title: string;
  description: string;
  list: Testimonial[];
}

// ==========================================
// FAQ Section Types
// ==========================================

/**
 * FAQ types
 */
export interface ConsultationProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQRowProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export interface FAQHeader {
  title: string;
  subtitle: string;
}

// ==========================================
// Contact Section Types
// ==========================================

/**
 * Contact form types
 */
export interface ServiceOption {
  id: string;
  label: string;
}

export interface ContactFormData {
  title: string;
  subtitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  servicesLabel: string;
  services: ServiceOption[];
  submitLabel: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
  selectedServices: string[];
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
  services?: string;
}

/**
 * Input field types
 */
export type InputFieldType = 'text' | 'email' | 'textarea';

export interface InputFieldProps {
  label: string;
  type?: InputFieldType;
  placeholder: string;
  value: string;
  fieldKey: keyof ContactFormErrors;
  touched: boolean;
  error?: string;
  rows?: number;
  onChange: (value: string) => void;
  onBlur: () => void;
}

/**
 * Service checkbox types
 */
export interface CheckboxProps {
  label: string;
  service: ServiceOption;
  checked: boolean;
  onToggle: (id: string) => void;
}

export interface CheckboxServicesProps {
  label: string;
  services: ServiceOption[];
  selectedServices: string[];
  touched: boolean;
  error?: string;
  onToggle: (id: string) => void;
}

// ==========================================
// Popup Types
// ==========================================

/**
 * Success popup types
 */
export interface SuccessPopupProps {
  data: SuccessPopup;
  isOpen: boolean;
  onClose: () => void;
}

export interface SuccessPopup {
  title: string;
  description: string;
  buttonLabel: string;
}

/**
 * Failed popup types
 */
export interface FailedPopupProps {
  data: FailedPopup;
  isOpen: boolean;
  onRetry: () => void;
}

export interface FailedPopup {
  title: string;
  description: string;
  buttonLabel: string;
}

// ==========================================
// Footer Types
// ==========================================

/**
 * Footer types
 */
export interface FooterNavItem {
  label: string;
  href: string;
}

export interface FooterSocialItem {
  name: string;
  href: string;
  icon: {
    dark: string;
    light: string;
  };
}

export interface FooterData {
  headline: string;
  logoSrc: string;
  logoAlt: string;
  navItems: FooterNavItem[];
  socialItems: FooterSocialItem[];
}

// ==========================================
// Theme Types
// ==========================================

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Pagination Type
 */

export interface PaginationProps {
  total: number;
  activeIndex: number;
  onClick: (index: number) => void;
  className: string;
}

// ==========================================
// Section Data Types
// ==========================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
/**
 * Example: Team Member
 */
// export interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   bio?: string;
//   image: string;
//   socialLinks?: {
//     linkedin?: string;
//     twitter?: string;
//     github?: string;
//   };
// }

// ==========================================
// Form Types (if needed)
// ==========================================

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
