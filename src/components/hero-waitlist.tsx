import WaitlistForm from '@/components/waitlist-form';

/**
 * Hero waitlist — thin wrapper between the Hero and the MissionStrip. The
 * card pulls up over the hero divider (-mt-12) for the layered cinematic
 * feel; hero content is before it in the DOM so nothing is covered.
 */
export default function HeroWaitlist() {
  return (
    <div className="relative z-10 bg-[#f7f0e1]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="hero-waitlist-card relative -mt-12 rounded-[2rem] border border-[#d9a441]/40 bg-[#fffdf7]/95 px-6 py-10 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:px-12 sm:py-12">
          <WaitlistForm
            source="inner-circle"
            idPrefix="hero"
            buttonLabel="Join the Inner Circle"
            hook="Join the Inner Circle for 15% off the first apparel drop + early access to Episode 001"
          />
        </div>
      </div>
    </div>
  );
}