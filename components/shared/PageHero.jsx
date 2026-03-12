import Image from "next/image";

export const PageHero = ({ eyebrow, title, subtitle, image, backgroundImage, testIdPrefix = "page" }) => {
  const bg = backgroundImage || image;
  return (
    <section className="relative overflow-hidden px-6 pb-14 md:px-12 lg:px-16" data-testid={`${testIdPrefix}-page-hero`}>
      <div
        className="relative mx-auto flex min-h-[360px] w-full max-w-screen-2xl items-end overflow-hidden border border-border"
        style={{ backgroundColor: "hsl(var(--secondary))" }}
      >
        {/* next/image replaces backgroundImage style — gets optimized, cached, WebP served */}
        {bg && (
          <Image
            src={bg}
            alt={title || "Hero image"}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        )}
        <div className="hero-overlay absolute inset-0" />
        <div className="grain-layer absolute inset-0" />
        <div className="relative z-10 w-full px-6 py-10 md:px-10 md:py-12">
          <p className="text-sm uppercase tracking-[0.22em] text-white/90" data-testid={`${testIdPrefix}-page-hero-eyebrow`}>
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl text-white sm:text-5xl lg:text-6xl" data-testid={`${testIdPrefix}-page-hero-title`}>
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg" data-testid={`${testIdPrefix}-page-hero-subtitle`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
