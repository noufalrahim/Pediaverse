import clsx from 'clsx';

// Optional: Add support for merging Tailwind class names
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}
