import { twMerge } from 'tailwind-merge';

export const cn = (...classes) => {
  return twMerge(classes.filter(Boolean).join(' '));
};
