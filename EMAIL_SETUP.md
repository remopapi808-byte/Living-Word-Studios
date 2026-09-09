# Email signup setup (free Neon Postgres)
1. Go to neon.tech, sign up free, create a project.
2. Copy the connection string (starts `postgresql://`).
3. Set `DATABASE_URL` to that string in your hosting env (and `.env.local` for dev).
4. Run `npx prisma migrate deploy` (or `npx prisma db push` for a quick first setup).
5. Redeploy — the homepage form at `#community` now saves to the `WaitlistEntry` table.
6. Test: submit your email twice — first shows success, second shows "already joined".
7. View signups: `npx prisma studio`, or the Neon dashboard → Tables → WaitlistEntry.
