'use client';
import { useState } from 'react';

type Status = 'idle' | 'loading' | 'done' | 'already' | 'error';

type WaitlistFormProps = {
  /** Persists to the Neon waitlist DB (source column). */
  source: 'inner-circle' | 'storybook';
  /** Prefix for the input id, e.g. 'hero' → id="hero-email". */
  idPrefix: string;
  /** Short action text for the submit button. */
  buttonLabel: string;
  /** The headline above the form (verbatim per placement). */
  hook: string;
  /** Small privacy/expectation line. */
  subcopy?: string;
  className?: string;
};

const DEFAULT_SUBCOPY = 'No spam — just launch news. Unsubscribe anytime.';

/**
 * Reusable inline lead-capture form wired to /api/waitlist (Neon
 * waitlist_signups / WaitlistEntry). Follows the existing CommunityClose
 * pattern exactly: same states, same copy family — additive, no refactor
 * of CommunityClose itself (which still posts `{ email }` only).
 */
export default function WaitlistForm({
  source,
  idPrefix,
  buttonLabel,
  hook,
  subcopy = DEFAULT_SUBCOPY,
  className = '',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = (await res.json()) as {
        ok: boolean;
        alreadyJoined?: boolean;
        error?: string;
      };
      if (res.ok && data.ok) {
        setStatus(data.alreadyJoined ? 'already' : 'done');
      } else {
        setErrorMsg(data.error ?? 'Something went wrong — please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Could not reach the server — please try again later.');
      setStatus('error');
    }
  }

  return (
    <div className={`mx-auto w-full max-w-md text-center ${className}`}>
      <p className="font-display text-lg leading-snug font-bold text-[#2e2a26] sm:text-xl">{hook}</p>
      {status === 'done' ? (
        <p
          role="status"
          className="mx-auto mt-5 max-w-md rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/90 px-6 py-3 text-sm font-semibold text-[#8a5a1d]"
        >
          You&apos;re on the list — watch your inbox for launch news.
        </p>
      ) : status === 'already' ? (
        <p
          role="status"
          className="mx-auto mt-5 max-w-md rounded-full border border-[#3c342b]/20 bg-[#fffdf7]/90 px-6 py-3 text-sm text-[#3c342b]/80"
        >
          This email already joined — you&apos;re all set.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <label htmlFor={`${idPrefix}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={status === 'loading'}
            className="w-full flex-1 rounded-full border border-[#3c342b]/25 bg-[#fffdf7] px-5 py-3 text-sm text-[#3c342b] placeholder:text-[#3c342b]/45 focus:border-[#d9a441] focus:outline-none disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e] disabled:opacity-60"
          >
            {status === 'loading' ? 'Joining…' : buttonLabel}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p role="alert" className="mt-3 text-sm font-medium text-[#b4552d]">
          {errorMsg}
        </p>
      )}
      {subcopy && <p className="mt-3 text-xs text-[#3c342b]/55">{subcopy}</p>}
    </div>
  );
}