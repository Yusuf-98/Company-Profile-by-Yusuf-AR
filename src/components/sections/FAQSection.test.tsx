import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ThemeProvider } from '../../context/ThemeProvider';
import { faqItems } from '../../data/faqItems';
import FAQSection from './FAQSection';

function renderFAQSection() {
  return render(
    <ThemeProvider>
      <FAQSection />
    </ThemeProvider>
  );
}

function getQuestionButton(question: string) {
  return screen.getByText(question).closest('button')!;
}

describe('FAQSection', () => {
  it('opens the first question by default', () => {
    renderFAQSection();

    const [first, second] = faqItems;
    expect(getQuestionButton(first.question)).toHaveAttribute('aria-expanded', 'true');
    expect(getQuestionButton(second.question)).toHaveAttribute('aria-expanded', 'false');
  });

  it('only keeps one question open at a time', async () => {
    const user = userEvent.setup();
    renderFAQSection();

    const [first, second] = faqItems;
    const firstButton = getQuestionButton(first.question);
    const secondButton = getQuestionButton(second.question);

    await user.click(secondButton);
    expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes an open question when clicked again', async () => {
    const user = userEvent.setup();
    renderFAQSection();

    const [first] = faqItems;
    const firstButton = getQuestionButton(first.question);

    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    await user.click(firstButton);
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  });
});
