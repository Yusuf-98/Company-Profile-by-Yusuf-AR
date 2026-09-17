import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useModalA11y } from './useModalA11y';

function TestModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const ref = useModalA11y(isOpen, onClose);
  if (!isOpen) return null;
  return (
    <div ref={ref} tabIndex={-1} role='dialog'>
      <button type='button'>First</button>
      <button type='button'>Last</button>
    </div>
  );
}

function Harness() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type='button' onClick={() => setOpen(true)}>
        Open modal
      </button>
      <TestModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

describe('useModalA11y', () => {
  it('locks body scroll while open and restores it on close', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    expect(document.body.style.overflow).toBe('');
    await user.click(screen.getByRole('button', { name: 'Open modal' }));
    expect(document.body.style.overflow).toBe('hidden');

    await user.keyboard('{Escape}');
    expect(document.body.style.overflow).toBe('');
  });

  it('moves focus into the modal on open and restores it to the trigger on close', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    const opener = screen.getByRole('button', { name: 'Open modal' });
    await user.click(opener);
    expect(screen.getByRole('button', { name: 'First' })).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(opener).toHaveFocus();
  });

  it('traps Tab focus within the modal (wraps from last back to first)', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    await user.click(screen.getByRole('button', { name: 'Open modal' }));
    const first = screen.getByRole('button', { name: 'First' });
    const last = screen.getByRole('button', { name: 'Last' });

    expect(first).toHaveFocus();
    await user.tab();
    expect(last).toHaveFocus();
    await user.tab();
    expect(first).toHaveFocus();
  });

  it('wraps backwards with Shift+Tab from the first element to the last', async () => {
    const user = userEvent.setup();
    render(<Harness />);

    await user.click(screen.getByRole('button', { name: 'Open modal' }));
    const last = screen.getByRole('button', { name: 'Last' });

    await user.tab({ shift: true });
    expect(last).toHaveFocus();
  });

  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<TestModal isOpen onClose={onClose} />);

    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
