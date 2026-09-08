// @polsia:shared — CSP builder (single source, used by proxy.ts with a
// per-request nonce). Scaffold-faithful minimal restore: script-src strict
// (nonce + 'strict-dynamic', no 'unsafe-inline'/'unsafe-eval' in production);
// style-src deliberately allows 'unsafe-inline' so headless UI primitives
// (Radix/shadcn) work in prod.

export interface CspExtraSources {
  frameSrc: string[];
  connectSrc: string[];
  mediaSrc: string[];
  fontSrc: string[];
  imgSrc: string[];
}

function sanitizeSources(sources: string[]): string[] {
  return sources.filter((s) => s.trim() !== '' && s.trim() !== '*' && !s.includes('unsafe-'));
}

export function buildCsp(
  nonce: string,
  isDev: boolean,
  apiUrl: string,
  extra: CspExtraSources,
): string {
  const scriptSrc = [`'nonce-${nonce}'`, `'strict-dynamic'`, 'https:'];
  if (isDev) {
    scriptSrc.push(`'unsafe-eval'`);
  }

  const connectSrc = [`'self'`, 'https:', 'wss:'];
  if (isDev) {
    connectSrc.push('ws:');
  }
  if (apiUrl.trim() !== '') {
    connectSrc.push(apiUrl.trim());
  }
  connectSrc.push(...sanitizeSources(extra.connectSrc));

  const directives: string[] = [
    `default-src 'self'`,
    `script-src ${scriptSrc.join(' ')}`,
    `style-src 'self' 'unsafe-inline' https:`,
    `img-src 'self' https: data: blob: ${sanitizeSources(extra.imgSrc).join(' ')}`.trim(),
    `font-src 'self' https: data: ${sanitizeSources(extra.fontSrc).join(' ')}`.trim(),
    `connect-src ${connectSrc.join(' ')}`,
    `frame-src 'self' ${sanitizeSources(extra.frameSrc).join(' ')}`.trim(),
    `media-src 'self' https: blob: ${sanitizeSources(extra.mediaSrc).join(' ')}`.trim(),
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ];
  return directives.join('; ');
}
