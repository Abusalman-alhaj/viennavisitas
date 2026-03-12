import Image from "next/image";
import { CtaStrip } from "@/components/shared/CtaStrip";
import { PageHero } from "@/components/shared/PageHero";
import { inspiredStories } from "@/data/siteContent";

export const metadata = {
  title: "Get Inspired — Vienna Stories | Vienna Visitas",
};

export default function InspiredPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial"
        title="Get Inspired"
        subtitle="Six story-led articles that reveal Vienna beyond checklists — through light, rhythm, and local atmosphere."
        image="/images/explore-inspired.jpg"
        testIdPrefix="inspired"
      />

      <section className="px-6 pb-6 md:px-12 lg:px-16" data-testid="inspired-stories-section">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-8">
          {inspiredStories.map((story, index) => (
            <article
              key={story.title}
              className="grid gap-5 border border-border bg-card p-6 md:grid-cols-[1.15fr_1fr] md:p-8"
              data-testid={`inspired-story-card-${index + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src={story.image} alt={story.title} width={800} height={600} className="aspect-[4/3] w-full object-cover" />
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">Story {index + 1}</p>
                <h2 className="mt-2 text-3xl">{story.title}</h2>
                <p className="story-dropcap mt-4 text-base text-muted-foreground">{story.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Have a project in mind for Vienna?"
        description="Jump back to the contact section and share your idea for photography, video, or destination storytelling."
        buttonText="Go to Contact"
        to="/#contact"
        testIdPrefix="inspired"
      />
    </>
  );
}
