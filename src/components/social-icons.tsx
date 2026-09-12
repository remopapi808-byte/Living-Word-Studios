/**
 * Social handle icon placeholders (Module 4b). YouTube / TikTok / Instagram
 * inline-SVG icons (stroke-current, 24x24 viewBox) with real aria-labels and
 * owner-sanctioned placeholder `href="#"` pending real handles. Links open in
 * a new tab with rel="noopener noreferrer".
 */
export const SOCIAL_LINKS = [
  { name: 'YouTube', href: '#', ariaLabel: 'Living Word Studios on YouTube' },
  { name: 'TikTok', href: '#', ariaLabel: 'Living Word Studios on TikTok' },
  { name: 'Instagram', href: '#', ariaLabel: 'Living Word Studios on Instagram' },
];

function YouTubeIcon({ iconClass }: { iconClass: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={iconClass}
    >
      <rect x="2.6" y="5.4" width="18.8" height="13.2" rx="3.6" />
      <path d="M10.3 9.4v5.2l4.6-2.6z" />
    </svg>
  );
}

function TikTokIcon({ iconClass }: { iconClass: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={iconClass}
    >
      <path d="M14.6 3.6c.5 2.3 2.1 4 4.4 4.4v2.6a6.3 6.3 0 0 1-3.5-1.1v5.9a4.4 4.4 0 1 1-4.4-4.4c.3 0 .7 0 1 .1v2.7a1.7 1.7 0 1 0 1.7 1.7V3.6h.8z" />
    </svg>
  );
}

function InstagramIcon({ iconClass }: { iconClass: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={iconClass}
    >
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.6" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONS = {
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
  Instagram: InstagramIcon,
};

/** Inline social icon row. `iconClass` sizes the icon (default h-4 w-4). */
export function SocialRow({ iconClass = 'h-4 w-4' }: { iconClass?: string }) {
  return (
    <ul className="inline-flex items-center gap-4">
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.name as keyof typeof ICONS];
        return (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-[#5b4632]/70 transition-colors hover:text-[#8a5a1d]"
            >
              <Icon iconClass={iconClass} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}