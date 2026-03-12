import Image from "next/image";
import { MapPin } from "lucide-react";
import { CtaStrip } from "@/components/shared/CtaStrip";
import { PageHero } from "@/components/shared/PageHero";
import { places } from "@/data/siteContent";

export const metadata = {
  title: "Places To Go in Vienna | Vienna Visitas",
};

export default function PlacesPage() {
  return (
    <>
      <PageHero
        eyebrow="Where To Go"
        title="Six iconic places in Vienna"
        subtitle="Each destination includes atmosphere, highlights, and visual context so you can choose your route quickly."
        image="/images/explore-places.jpg"
        testIdPrefix="places"
      />

      <section className="px-6 pb-6 md:px-12 lg:px-16" data-testid="places-list-section">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {places.map((place) => (
            <article key={place.name} className="editorial-card overflow-hidden" data-testid={`place-card-${place.name.toLowerCase().replace(/\s+/g, "-")}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src={place.image} alt={place.name} width={800} height={600} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl">{place.name}</h2>
                <p className="mt-2 inline-flex items-center gap-1 border border-primary/40 px-3 py-1 text-xs uppercase tracking-[0.16em] text-primary">
                  <MapPin size={13} /> {place.mood}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{place.description}</p>
                <ul className="mt-4 space-y-1 text-sm">
                  {place.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Continue to the seasonal Vienna Guide"
        description="See what changes from spring to winter and choose the best period for your style of travel."
        buttonText="Open Vienna Guide"
        to="/vienna-guide"
        testIdPrefix="places"
      />
    </>
  );
}
