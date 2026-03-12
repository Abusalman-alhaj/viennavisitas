"use client";

import Image from "next/image";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaStrip } from "@/components/shared/CtaStrip";
import { PageHero } from "@/components/shared/PageHero";
import { galleryPhotos } from "@/data/siteContent";

const categoryLabelMap = {
  all: "All",
  cityscape: "Cityscape",
  imperial: "Imperial",
  seasonal: "Seasonal",
  markets: "Markets",
  gardens: "Gardens",
  architecture: "Architecture",
  "street-life": "Street Life",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filterOptions = useMemo(() => {
    const categories = Array.from(new Set(galleryPhotos.map((photo) => photo.category)));
    return ["all", ...categories];
  }, []);

  const visiblePhotos = useMemo(
    () =>
      activeCategory === "all"
        ? galleryPhotos
        : galleryPhotos.filter((photo) => photo.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <PageHero
        eyebrow="Visual Archive"
        title="Gallery of Vienna"
        subtitle="A 12-photo collection arranged in a masonry flow and grouped by storytelling themes."
        image="/images/explore-gallery.jpg"
        testIdPrefix="gallery"
      />

      <section className="px-6 pb-6 md:px-12 lg:px-16" data-testid="gallery-filters-section">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap gap-2" data-testid="gallery-filter-buttons-group">
          {filterOptions.map((option) => (
            <Button
              key={option}
              type="button"
              variant={activeCategory === option ? "default" : "outline"}
              className="rounded-none uppercase tracking-[0.16em]"
              onClick={() => setActiveCategory(option)}
              data-testid={`gallery-filter-button-${option}`}
            >
              {categoryLabelMap[option]}
            </Button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-6 md:px-12 lg:px-16" data-testid="gallery-masonry-section">
        <div className="mx-auto columns-1 w-full max-w-screen-2xl gap-4 sm:columns-2 lg:columns-3" data-testid="gallery-masonry-grid">
          {visiblePhotos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              className="masonry-item group mb-4 w-full overflow-hidden border border-border bg-card text-left"
              data-testid={`gallery-photo-button-${photo.id}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src={photo.image} alt={photo.title} width={1200} height={800} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="px-4 py-3">
                <p className="text-sm uppercase tracking-[0.16em] text-primary">{categoryLabelMap[photo.category]}</p>
                <p className="mt-1 text-lg">{photo.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedPhoto && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4" data-testid="gallery-lightbox-modal">
          <div className="relative w-full max-w-4xl border border-white/20 bg-black" data-testid="gallery-lightbox-content">
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-3 top-3 z-10 border border-white/30 bg-black/70 p-2 text-white"
              data-testid="gallery-lightbox-close-button"
            >
              <X size={16} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src={selectedPhoto.image} alt={selectedPhoto.title} width={1200} height={800} className="max-h-[78vh] w-full object-contain" />
            <div className="border-t border-white/20 px-4 py-3 text-white" data-testid="gallery-lightbox-caption">
              {selectedPhoto.title}
            </div>
          </div>
        </div>
      )}

      <CtaStrip
        title="Move into editorial stories"
        description="Read six narrative pieces that interpret Vienna through mood, culture, and hidden detail."
        buttonText="Open Get Inspired"
        to="/inspired"
        testIdPrefix="gallery"
      />
    </>
  );
}
