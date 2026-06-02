import { DownloadCtaSection } from '~/components/download-cta';
import { FaqTeaserSection } from '~/components/faq-teaser';
import { Footer } from '~/components/footer';
import { GetInvolvedSection } from '~/components/get-involved';
import { Hero } from '~/components/hero';
import { ProblemWeSolveSection } from '~/components/problem-we-solve';
import { SiteHeader } from '~/components/site-header';
import { TendrilMockupSection } from '~/components/tendril-mockup';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProblemWeSolveSection />
        <TendrilMockupSection />
        <DownloadCtaSection />
        <GetInvolvedSection />
        <FaqTeaserSection />
      </main>
      <Footer />
    </div>
  );
}
