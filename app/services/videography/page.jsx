import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CtaStrip } from "@/components/shared/CtaStrip";
import { services } from "@/data/siteContent";

const service = services.find((s) => s.slug === "videography");

export const metadata = {
  title: "Videography",
  description: "Short-form Reels, TikTok videos, and cinematic films produced in Vienna for modern platforms.",
  openGraph: {
    title: "Videography | Vienna Visitas",
    description: "Short-form Reels, TikTok videos, and cinematic films produced in Vienna for modern platforms.",
    images: [{ url: "/og-image.jpg" }],
  },
};



export default function VideographyPage() {
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

            <div className="space-y-5">
              <div className="border border-border bg-card p-6">
                <h3 className="text-xl font-heading">Production Style</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Cinematic stabilised shots, natural audio, and colour grades built around Vienna's distinctive palette — warm ochres, cool blues, and the deep greens of imperial parks. Edited for the platform you need.
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <h3 className="text-xl font-heading">Formats & Delivery</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Delivered in 4K for long-form or 1080p for social. Vertical cuts for Reels and TikTok included. Raw footage available on request.
                </p>
              </div>
              <div className="border border-border bg-card p-6">
                <h3 className="text-xl font-heading">Turnaround</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Short-form edits within 5 business days. Full cinematic films within 2–3 weeks depending on scope and revision rounds.
                </p>
              </div>
            </div>
          </div>

          {/* Featured video placeholder */}
          <div className="mt-12">
            <h2 className="text-3xl sm:text-4xl">Sample Work</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2" style={{gridAutoRows: "280px"}}>
              {[
                "/images/service-videography.jpg",
                "/images/service-videography.jpg",
              ].map((src, i) => (
                <div key={i} className="relative overflow-hidden border border-border group">
                  <Image src={src} alt={`Videography sample ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-transparent border-l-white ml-1" style={{borderLeftWidth: "14px"}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Let's make something cinematic"
        description="Discuss your video brief, platform needs, and production timeline."
        buttonText="Get in Touch"
        to="/#contact"
        testIdPrefix="videography"
      />
    </>
  );
}
