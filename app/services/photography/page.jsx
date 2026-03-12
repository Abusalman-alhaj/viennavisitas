import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CtaStrip } from "@/components/shared/CtaStrip";
import { services } from "@/data/siteContent";

const service = services.find((s) => s.slug === "photography");

export const metadata = {
  title: "Photography",
  description: "Architecture, event, and seasonal photography across Vienna. Visual storytelling shaped by mood, detail, and light.",
  openGraph: {
    title: "Photography | Vienna Visitas",
    description: "Architecture, event, and seasonal photography across Vienna. Visual storytelling shaped by mood, detail, and light.",
    images: [{ url: "/og-image.jpg" }],
  },
};



const portfolioImages = [
  "/images/service-photography.jpg",
  "/images/gallery-gardens-1.jpg",
  "/images/gallery-architecture-1.jpg",
  "/images/service-photography.jpg",
  "/images/gallery-cityscape-1.jpg",
  "/images/gallery-seasonal-1.jpg",
];

export default function PhotographyPage() {
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

          {/* What's included */}
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

            <div className="space-y-5">
              <div className="border border-border bg-card p-6">
                <h3 className="text-xl font-heading">The Approach</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Every session starts with a mood brief — understanding the feeling you want to evoke before we ever pick up a camera. Vienna's changing light, from pale winter mornings to golden autumn evenings, shapes everything.
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <h3 className="text-xl font-heading">Deliverables</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Fully edited high-resolution images delivered via private gallery. Licensing options available for commercial use, print, and digital campaigns.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio grid */}
          <div className="mt-12">
            <h2 className="text-3xl sm:text-4xl">Portfolio Highlights</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3" style={{gridAutoRows: "240px"}}>
              {portfolioImages.map((src, i) => (
                <div key={i} className="relative overflow-hidden border border-border">
                  <Image src={src} alt={`Photography sample ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to shoot Vienna?"
        description="Get in touch to discuss your photography project, timeline, and vision."
        buttonText="Contact Me"
        to="/#contact"
        testIdPrefix="photography"
      />
    </>
  );
}
