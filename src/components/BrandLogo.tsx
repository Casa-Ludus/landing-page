import { cn } from '../lib/utils';

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-8 font-black tracking-tight', className)}>
      <img
        src="/res/Logo1.png"
        alt="Casa Ludus"
        className="h-32 w-auto object-contain"
      />
      <span className="text-white">Casa Ludus</span>
    </span>
  );
}
