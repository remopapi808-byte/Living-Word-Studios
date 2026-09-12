import BibleShorts from '@/components/bible-shorts';
import CommunityClose from '@/components/community-close';
import Hero from '@/components/hero';
import HeroWaitlist from '@/components/hero-waitlist';
import IllustratedBooks from '@/components/illustrated-books';
import KidsKingdom from '@/components/kids-kingdom';
import MissionStrip from '@/components/mission-strip';
import OurStory from '@/components/our-story';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import StudioGoods from '@/components/studio-goods';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HeroWaitlist />
        <MissionStrip />
        <BibleShorts />
        <KidsKingdom />
        <IllustratedBooks />
        <StudioGoods />
        <OurStory />
        <CommunityClose />
      </main>
      <SiteFooter />
    </>
  );
}
