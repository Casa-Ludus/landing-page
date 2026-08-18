import { cn } from '../../lib/utils';

interface TwitchIconProps {
  size?: number;
  className?: string;
}

export function TwitchIcon({ size = 18, className }: TwitchIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('shrink-0', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M208 32H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v32a8 8 0 0 0 13.13 6.12L121.94 208h42.12l44.81 38.12A8 8 0 0 0 224 240v-32h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 160h-16a8 8 0 0 0-8 8v24.34l-35.88-30.51A8 8 0 0 0 144 192h-32a8 8 0 0 0-5.13 1.88L64 224.34V200a8 8 0 0 0-8-8H48V48h160ZM176 128V88a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm-56 0V88a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Z" />
    </svg>
  );
}
