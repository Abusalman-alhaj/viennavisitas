import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CtaStrip } from "@/components/shared/CtaStrip";
import { services } from "@/data/siteContent";

const service = services.find((s) => s.slug === "tourism-digital-content");

export const metadata = {
  title: "Tourism & Digital Content",
  description: "Campaign-ready Vienna content for tourism boards, travel brands, and destination marketers.",
  openGraph: {
    title: "Tourism & Digital Content | Vienna Visitas",
    description: "Campaign-ready Vienna content for tourism boards, travel brands, and destination marketers.",
    images: [{ url: "/og-image.jpg" }],
  },
};



const processSteps = [
  { step: "01", title: "Discovery", description: "We map your target audience, campaign goals, and the story Vienna can tell for your brand." },
  { step: "02", title: "Content Plan", description: "A tailored content calendar with shoot locations, formats, and platform strategy." },
  { step: "03", title: "Production", description: "On-location shoots across Vienna combining photography, video, and social-first formats." },
  { step: "04", title: "Delivery", description: "Campaign-ready assets delivered with captions, hashtag sets, and usage rights." },
];

export default function TourismDigitalContentPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        subtitle={service.longDescription}
        backgroundImage={service.image}
      />

      <section className="px-6 py-10 md:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-screen-2xl">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft size={14} /> Back to Services
          </Link>

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl">What's Included</h2>
              <ul className="mt-6 space-y-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-border pb-4">
                    <ArrowRight size={14} className="mt-1 shrink-0 text-primary" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-card p-8">
              <h3 className="text-xl font-heading">Who This Is For</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Tourism boards, travel agencies, hospitality brands, cultural institutions, and destination marketers who need authentic Vienna content that performs — not just looks pretty.
              </p>
              <div className="mt-6 space-y-2">
                {["Tourism Austria partners", "Hotel & hospitality groups", "Travel influencer campaigns", "Cultural event promotion"].map((type) => (
                  <div key={type} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mt-12">
            <h2 className="text-3xl sm:text-4xl">The Process</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {processSteps.map((s) => (
                <div key={s.step} className="border border-border bg-card p-6">
                  <p className="text-4xl font-heading text-primary/30">{s.step}</p>
                  <h3 className="mt-2 text-lg font-heading">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-10 relative overflow-hidden border border-border" style={{height: "360px"}}>
            <Image src="/images/service-tourism.jpg" alt="Tourism content Vienna" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-black/40 flex items-end p-10">
              <p className="text-white font-heading text-2xl sm:text-3xl max-w-xl leading-snug">
                "Vienna isn't just a destination — it's a feeling. Let's make sure your audience feels it too."
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Let's build your Vienna campaign"
        description="Reach out to discuss partnerships, content packages, and collaboration opportunities."
        buttonText="Start a Conversation"
        to="/#contact"
        testIdPrefix="tourism"
      />
    </>
  );
}