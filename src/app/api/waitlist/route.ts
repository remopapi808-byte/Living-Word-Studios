import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';

const BodySchema = z.object({
  email: z.string().trim().toLowerCase().email('Please enter a valid email address.'),
  // Backward compatible: existing CommunityClose posts `{ email }` only and
  // keeps working (source optional). New inline forms tag their placement.
  source: z.enum(['community-close', 'kids-kingdom', 'inner-circle', 'storybook']).optional(),
});

// Light in-memory rate limit: 5 requests / minute / IP. Fine for launch scale.
const WINDOW_MS = 60_000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many signups — please try again in a minute.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Please provide an email address.' },
      { status: 400 },
    );
  }

  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Please provide a valid email address.' },
      { status: 400 },
    );
  }

  try {
    const existing = await prisma.waitlistEntry.findUnique({
      where: { email: parsed.data.email },
    });
    if (existing) {
      return NextResponse.json({ ok: true, alreadyJoined: true });
    }
    await prisma.waitlistEntry.create({
      data: { email: parsed.data.email, source: parsed.data.source ?? null },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('waitlist signup failed', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong — please try again later.' },
      { status: 500 },
    );
  }
}
