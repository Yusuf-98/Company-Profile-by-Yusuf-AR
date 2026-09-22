import { Component, type ErrorInfo, type ReactNode } from 'react';
import Button from './ui/Button';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error rendering the app:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        // Error fallback
        <div className='min-h-screen flex items-center justify-center px-4 bg-base-white dark:bg-base-black'>
          <div className='flex flex-col items-center gap-4 text-center max-w-md'>
            <h1 className='font-bold text-size-display-sm dark:text-neutral-25'>
              Something went wrong
            </h1>
            <p className='text-neutral-400 font-medium text-size-sm md:text-size-md'>
              This page ran into an unexpected error. Try reloading — if it keeps
              happening, please let us know.
            </p>
            <Button
              type='button'
              size='md'
              background='orange'
              onClick={() => window.location.reload()}
            >
              Reload page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
