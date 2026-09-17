import React from 'react';

// ==========================================
// UI Component Types
// ==========================================

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

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface LogoProps {
  title: string;
  description?: string;
  logo?: string;
  onClick?: () => void;
}

export interface HeroProps {
  title: string;
  titleSpan: string;
  description: string;
  image?: string;
}

// ==========================================
// About Section Types
// ==========================================

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

export interface ServiceMetric {
  label: string;
  value: number; // 0-100, drives the bar chart width in the detail modal
  display: string;
}

export interface ServiceDetail {
  longDescription: string;
  highlights: string[];
  metrics: ServiceMetric[];
}

export interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  detail: ServiceDetail;
}

export interface ServiceCardData {
  title: string;
  description: string;
  list: ServiceCardProps[];
}

export interface ServiceCardComponentProps extends ServiceCardProps {
  onClick: () => void;
}

export interface ServiceDetailModalProps {
  service: ServiceCardProps | null;
  onClose: () => void;
}

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

export interface PortfolioCardProps extends PortfolioProps {
  onClick: () => void;
}

export interface PortfolioPreviewModalProps {
  item: PortfolioProps | null;
  onClose: () => void;
}

// ==========================================
// Testimonial Section Types
// ==========================================

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
// Pagination Types
// ==========================================

export interface PaginationProps {
  total: number;
  activeIndex: number;
  onClick: (index: number) => void;
  className: string;
}
