/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { cn } from "../../lib/utils"
import { cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

const spinnerVariants = cva('flex-col items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
  defaultVariants: {
    show: true,
  },
});

const loaderVariants = cva('animate-spin text-primary', {
  variants: {
    size: {
      small: 'size-6',
      medium: 'size-8',
      large: 'size-12',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export function Spinner({ size, show, children, className, testId }:SpinnerProps) {
  return (
    <span className={spinnerVariants({ show })} data-testid={testId}>
      <Loader2 className={cn(loaderVariants({ size }), className)} />
      {children}
    </span>
    
  );
}

interface SpinnerProps {
  size?: string;
  show?: boolean;
  children?: React.ReactNode;
  className?: string;
  testId?: string;
}
