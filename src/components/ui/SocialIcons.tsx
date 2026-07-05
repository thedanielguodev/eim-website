type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3a9 9 0 0 0-7.75 13.55L3 21l4.6-1.2A9 9 0 1 0 12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9c0 4 2.5 6.5 6.5 6.5.6 0 1-.5.9-1l-.3-1.3a.9.9 0 0 0-.9-.7l-1.3.2a5 5 0 0 1-2.6-2.6l.2-1.3a.9.9 0 0 0-.7-.9L9 7.6c-.5-.1-1 .3-1 .9z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WechatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M9.5 4.5c-3.6 0-6.5 2.4-6.5 5.5 0 1.8 1 3.3 2.5 4.4l-.6 2 2.2-1.1c.7.2 1.5.3 2.4.3h.3a5.6 5.6 0 0 1-.2-1.5c0-3.3 3-6 6.7-6h.2c-.7-2.1-3.3-3.6-7-3.6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16.2 9.6c-3 0-5.4 2-5.4 4.6 0 2.5 2.4 4.6 5.4 4.6.7 0 1.4-.1 2-.3l1.8.9-.5-1.6c1.2-.9 2.1-2.1 2.1-3.6 0-2.6-2.4-4.6-5.4-4.6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
