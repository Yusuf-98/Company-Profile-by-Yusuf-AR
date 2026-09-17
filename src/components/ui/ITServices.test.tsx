import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ThemeProvider } from '../../context/ThemeProvider';
import { services } from '../../data/services';
import ITServices from './ITServices';

function renderITServices() {
  return render(
    <ThemeProvider>
      <ITServices />
    </ThemeProvider>
  );
}

describe('ITServices', () => {
  it('does not show a detail modal until a service card is clicked', () => {
    renderITServices();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens a detail modal with the description, highlights and metrics on click', async () => {
    const user = userEvent.setup();
    renderITServices();

    const [first] = services.list;
    await user.click(screen.getByRole('button', { name: new RegExp(first.title) }));

    const dialog = screen.getByRole('dialog');
    const modal = within(dialog);
    expect(dialog).toBeInTheDocument();
    expect(modal.getByRole('heading', { name: first.title })).toBeInTheDocument();
    expect(modal.getByText(first.detail.longDescription)).toBeInTheDocument();

    for (const highlight of first.detail.highlights) {
      expect(modal.getByText(highlight)).toBeInTheDocument();
    }
    for (const metric of first.detail.metrics) {
      expect(modal.getByText(metric.label)).toBeInTheDocument();
      expect(modal.getByText(metric.display)).toBeInTheDocument();
    }
  });

  it('shows a different service after closing and opening another card', async () => {
    const user = userEvent.setup();
    renderITServices();

    const [first, second] = services.list;
    await user.click(screen.getByRole('button', { name: new RegExp(first.title) }));
    expect(within(screen.getByRole('dialog')).getByRole('heading', { name: first.title })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Close details' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: new RegExp(second.title) }));
    expect(within(screen.getByRole('dialog')).getByRole('heading', { name: second.title })).toBeInTheDocument();
  });

  it('closes the modal when Escape is pressed', async () => {
    const user = userEvent.setup();
    renderITServices();

    const [first] = services.list;
    await user.click(screen.getByRole('button', { name: new RegExp(first.title) }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
