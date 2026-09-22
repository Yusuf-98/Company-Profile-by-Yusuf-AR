import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ThemeProvider } from '../../context/ThemeProvider';
import { contactFormData } from '../../data/contactFormData';
import { SUCCESS_DATA } from '../../data/successPopup';
import ContactFormSection from './ContactFormSection';

function renderContactFormSection() {
  return render(
    <ThemeProvider>
      <ContactFormSection />
    </ThemeProvider>
  );
}

describe('ContactFormSection', () => {
  it('associates each field label with its input', () => {
    renderContactFormSection();

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('shows a required-field error for every empty field on submit', async () => {
    const user = userEvent.setup();
    renderContactFormSection();

    await user.click(screen.getByRole('button', { name: contactFormData.submitLabel }));

    expect(await screen.findByText('Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.getByText('Message is required.')).toBeInTheDocument();
  });

  it('clears the required-field error once the field is filled in', async () => {
    const user = userEvent.setup();
    renderContactFormSection();

    await user.click(screen.getByRole('button', { name: contactFormData.submitLabel }));
    await screen.findByText('Name is required.');

    await user.type(screen.getByLabelText('Name'), 'Yusuf');
    expect(screen.queryByText('Name is required.')).not.toBeInTheDocument();
  });

  it('submits successfully and shows the success popup when the form is valid', async () => {
    const user = userEvent.setup();
    renderContactFormSection();

    await user.type(screen.getByLabelText('Name'), 'Yusuf');
    await user.type(screen.getByLabelText('Email'), 'yusuf@example.com');
    await user.type(screen.getByLabelText('Message'), 'Hello, I would like a quote.');

    await user.click(screen.getByRole('button', { name: contactFormData.submitLabel }));

    expect(await screen.findByText(SUCCESS_DATA.title)).toBeInTheDocument();
  });
});
