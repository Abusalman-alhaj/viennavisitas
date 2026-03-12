import { CalendarDays } from "lucide-react";
import { CtaStrip } from "@/components/shared/CtaStrip";
import { PageHero } from "@/components/shared/PageHero";
import { markets, seasons } from "@/data/siteContent";

export const metadata = {
  title: "Vienna Guide — Four Seasons | Vienna Visitas",
};

export default function ViennaGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Seasonal Guide"
        title="Vienna through all four seasons"
        subtitle="From Easter blooms to winter lights, each season opens a different personality of the city."
        image="/images/explore-vienna-guide.jpg"
        testIdPrefix="vienna-guide"
      />

      <section className="px-6 pb-6 md:px-12 lg:px-16" data-testid="vienna-guide-seasons-section">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-5 md:grid-cols-2">
          {seasons.map((season) => (
            <article key={season.title} className="editorial-card p-6" data-testid={`season-card-${season.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
                <CalendarDays size={14} /> Season Focus
              </p>
              <h2 className="mt-3 text-2xl">{season.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{season.summary}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {season.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-6 md:px-12 lg:px-16" data-testid="vienna-guide-markets-section">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-5 md:grid-cols-2">
          <article className="editorial-card p-6" data-testid="easter-markets-card">
            <h3 className="text-2xl">Easter Markets</h3>
            <ul className="mt-3 space-y-1 text-sm">
              {markets.easter.map((market) => (
                <li key={market}>• {market}</li>
              ))}
            </ul>
          </article>

          <article className="editorial-card p-6" data-testid="christmas-markets-card">
            <h3 className="text-2xl">Christmas Markets</h3>
            <ul className="mt-3 space-y-1 text-sm">
              {markets.christmas.map((market) => (
                <li key={market}>• {market}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <CtaStrip
        title="See the city in images"
        description="Open the visual gallery and filter by theme — cityscape, imperial, markets, architecture, and more."
        buttonText="Open Gallery"
        to="/gallery"
        testIdPrefix="vienna-guide"
      />
    </>
  );
}
