import { useState } from 'react';
import type { ContactFormState, ContactFormErrors } from '../../types';
import FormCard from '../ui/FormCard';
import { contactFormData } from '../../data/contactFormData';
import SuccessPopup from '../ui/SuccessPopup';
import FailedPopup from '../ui/FailedPopup';
import { SUCCESS_DATA } from '../../data/successPopup';
import { FAILED_DATA } from '../../data/failedPopup';
import Button from '../ui/Button';
import CheckboxServices from '../ui/CheckboxServices';

function ContactFormSection() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    selectedServices: ['web-development'],
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPopup, setShowPopup] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const EMAIL_VAL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate(f: ContactFormState): ContactFormErrors {
    const errs: ContactFormErrors = {};
    if (!f.name.trim()) errs.name = 'Name is required.';
    if (!f.email.trim()) errs.email = 'Email is required.';
    else if (!EMAIL_VAL.test(f.email.trim()))
      errs.email = 'Please enter a valid email address.';
    if (!f.message.trim()) errs.message = 'Message is required.';
    else if (f.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters.';
    if (f.selectedServices.length === 0)
      errs.services = 'Please select at least one service.';
    return errs;
  }

  const handleChange = (field: keyof ContactFormState) => (value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field])
      setErrors((prev) => ({ ...prev, ...validate(updated) }));
  };

  const handleBlur = (field: keyof ContactFormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, ...validate(form) }));
  };

  const toggleService = (id: string) => {
    setForm((prev) => {
      const next = prev.selectedServices.includes(id)
        ? prev.selectedServices.filter((s) => s !== id)
        : [...prev.selectedServices, id];
      if (next.length > 0) setErrors((e) => ({ ...e, services: undefined }));
      return { ...prev, selectedServices: next };
    });
  };

  const handleSubmit = async () => {
    setTouched({ name: true, email: true, message: true, services: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    try {
      await Promise.resolve();
      setShowPopup(true);
    } catch {
      setShowFailed(true);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    setForm({
      name: '',
      email: '',
      message: '',
      selectedServices: ['web-development'],
    });
    setErrors({});
    setTouched({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => setShowFailed(false);

  return (
    <section
      id='contact'
      className='w-full flex items-center justify-center px-4 md:px-10xl lg:px-11xl pt-10 md:py-20'
    >
      <SuccessPopup
        data={SUCCESS_DATA}
        isOpen={showPopup}
        onClose={handleClose}
      />
      <FailedPopup
        data={FAILED_DATA}
        isOpen={showFailed}
        onRetry={handleRetry}
      />

      <div className='flex flex-col items-center justify-center gap-12 w-full max-w-180'>
        <div className='flex flex-col items-start gap-4 w-full'>
          <h2 className='w-full text-center font-bold text-size-display-sm md:text-size-display-md lg:text-size-display-xl dark:text-neutral-25'>
            {contactFormData.title}
          </h2>
          <p className='w-full text-center font-medium text-size-sm md:text-size-md lg:text-size-lg text-neutral-400'>
            {contactFormData.subtitle}
          </p>
        </div>

        <div className='flex flex-col items-start gap-10 w-full'>
          <div className='flex flex-col items-start gap-5 w-full'>
            <FormCard
              data={contactFormData}
              form={form}
              errors={errors}
              touched={touched}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <CheckboxServices
              label={contactFormData.servicesLabel}
              services={contactFormData.services}
              selectedServices={form.selectedServices}
              touched={!!touched.services}
              error={errors.services}
              onToggle={toggleService}
            />
          </div>

          <Button
            background='orange'
            size='md'
            type='button'
            onClick={handleSubmit}
            className='w-full'
          >
            {contactFormData.submitLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
