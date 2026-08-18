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
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('shrink-0', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143L12 24V4.286h-2.571zm13.143 0v17.143h-5.142l-3.429 2.571v-2.571H6V0z" />
    </svg>
  );
}
