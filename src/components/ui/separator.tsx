'use client';

import * as React from 'react';

import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/src/lib/utils';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...properties },
    reference
  ) => (
    <SeparatorPrimitive.Root
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      decorative={decorative}
      orientation={orientation}
      ref={reference}
      {...properties}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
