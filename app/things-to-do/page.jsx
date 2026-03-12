import { Sparkles } from "lucide-react";
import { CtaStrip } from "@/components/shared/CtaStrip";
import { PageHero } from "@/components/shared/PageHero";
import { thingsToDo } from "@/data/siteContent";

export const metadata = {
  title: "Things To Do in Vienna | Vienna Visitas",
};

export default function ThingsToDoPage() {
  return (
    <>
      <PageHero
        eyebrow="Local Experiences"
        title="Nine things to do in Vienna"
        subtitle="A practical route through imperial sights, hidden corners, markets, music, and coffeehouse culture."
        image="/images/explore-things-to-do.jpg"
        testIdPrefix="things-to-do"
      />

      <section className="px-6 pb-6 md:px-12 lg:px-16" data-testid="things-to-do-list-section">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {thingsToDo.map((item, index) => (
            <article key={item.title} className="editorial-card p-6" data-testid={`things-to-do-item-card-${index + 1}`}>
              <p className="text-xs uppercase tracking-[0.18em] text-primary">Experience {index + 1}</p>
              <h2 className="mt-2 text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-medium text-foreground">Location:</span> {item.location}
                </p>
                <p className="flex items-start gap-2">
                  <Sparkles size={15} className="mt-[2px] text-primary" />
                  <span>
                    <span className="font-medium text-foreground">Local tip:</span> {item.tip}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Next stop: Places To Go"
        description="See six key neighborhoods and landmarks with mood labels and highlights for easier trip planning."
        buttonText="Open Places"
        to="/places"
        testIdPrefix="things-to-do"
      />
    </>
  );
}
