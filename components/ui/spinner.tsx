import { Loader } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Spinner = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <Loader
        ref={ref}
        className={cn('animate-spin', className)}
        role="status"
        aria-label="loading"
        {...props}
      />
    );
  },
);
Spinner.displayName = 'Spinner';

export { Spinner };
