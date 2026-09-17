import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ThemeProvider } from '../../context/ThemeProvider';
import { portfolioData } from '../../data/portfolioData';
import PortfolioSection from './PortfolioSection';

function renderPortfolioSection() {
  return render(
    <ThemeProvider>
      <PortfolioSection />
    </ThemeProvider>
  );
}

describe('PortfolioSection', () => {
  it('does not show a preview modal until a card is clicked', () => {
    renderPortfolioSection();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens a preview modal with the matching image, category and label on click', async () => {
    const user = userEvent.setup();
    renderPortfolioSection();

    const [first] = portfolioData.portfolioList;
    await user.click(screen.getByRole('button', { name: new RegExp(first.label) }));

    const dialog = screen.getByRole('dialog');
    const modal = within(dialog);
    expect(dialog).toBeInTheDocument();
    expect(modal.getByRole('heading', { name: first.label })).toBeInTheDocument();
    expect(modal.getByText(first.category)).toBeInTheDocument();
    expect(modal.getByAltText(first.alt)).toHaveAttribute('src', first.image);
  });

  it('closes the modal when the close button is clicked', async () => {
    const user = userEvent.setup();
    renderPortfolioSection();

    const [first] = portfolioData.portfolioList;
    await user.click(screen.getByRole('button', { name: new RegExp(first.label) }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Close preview' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the modal when the backdrop is clicked but not when the card content is clicked', async () => {
    const user = userEvent.setup();
    renderPortfolioSection();

    const [first] = portfolioData.portfolioList;
    await user.click(screen.getByRole('button', { name: new RegExp(first.label) }));

    const dialog = screen.getByRole('dialog');
    await user.click(screen.getByRole('heading', { name: first.label }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.click(dialog);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the modal when Escape is pressed', async () => {
    const user = userEvent.setup();
    renderPortfolioSection();

    const [first] = portfolioData.portfolioList;
    await user.click(screen.getByRole('button', { name: new RegExp(first.label) }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
