type ArtProps = {
  className?: string;
};

export function RocketArt({ className }: ArtProps) {
  return (
    <svg
      viewBox="0 0 140 180"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M70 6c20 25 32 54 32 88 0 20-6 40-13 52H51c-7-12-13-32-13-52C38 60 50 31 70 6Z"
        fill="var(--color-bg-cream, #f8f4e8)"
      />
      <path
        d="M70 6c9 10 16 22 21 35H49C54 28 61 16 70 6Z"
        fill="var(--color-primary)"
      />
      <circle cx="70" cy="80" r="18" fill="var(--color-primary)" />
      <circle cx="70" cy="80" r="11" fill="var(--color-accent)" />
      <path
        d="M38 105c-17 9-25 25-28 44 18-4 31-13 40-25l-12-19Z"
        fill="var(--color-accent)"
      />
      <path
        d="M102 105c17 9 25 25 28 44-18-4-31-13-40-25l12-19Z"
        fill="var(--color-accent)"
      />
      <path
        d="M51 146h38c-2 12-9 23-19 27-10-4-17-15-19-27Z"
        fill="var(--color-primary)"
      />
      <path
        d="M60 146c1 13 4 21 10 26 6-5 9-13 10-26H60Z"
        fill="var(--color-accent)"
      />
      <path
        d="M52 42h36M58 52h24"
        stroke="var(--color-primary)"
        strokeOpacity=".18"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="70" cy="80" r="4" fill="var(--color-primary)" />
    </svg>
  );
}

export function AlienArt({ className }: ArtProps) {
  return (
    <svg
      viewBox="0 0 90 90"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M45 7c4 8 5 12 5 18"
        stroke="var(--color-accent)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="50" cy="9" r="5" fill="var(--color-accent)" />
      <path
        d="M45 19c16 0 28 13 28 32 0 18-12 31-28 31S17 69 17 51c0-19 12-32 28-32Z"
        fill="var(--color-accent)"
      />
      <ellipse cx="34" cy="48" rx="7" ry="11" fill="var(--color-primary)" />
      <ellipse cx="56" cy="48" rx="7" ry="11" fill="var(--color-primary)" />
      <circle cx="36" cy="45" r="2.4" fill="var(--color-bg-cream, #f8f4e8)" />
      <circle cx="58" cy="45" r="2.4" fill="var(--color-bg-cream, #f8f4e8)" />
      <path
        d="M38 66c4 4 10 4 14 0"
        stroke="var(--color-primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
