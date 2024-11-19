'use client';
import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/utils/cn';

type DivInputProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: ReactNode;
};

const DivInput = React.forwardRef<HTMLInputElement, DivInputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid w-full max-w-sm items-center gap-1.5 text-content-primary',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

DivInput.displayName = 'DivInput';

export { DivInput };
