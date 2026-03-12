export const metadata = {
  title: "Gallery",
  description: "A curated photo gallery of Vienna — cityscapes, imperial architecture, gardens, markets, and street life.",
  openGraph: {
    title: "Gallery | Vienna Visitas",
    description: "A curated photo gallery of Vienna — cityscapes, imperial architecture, gardens, markets, and street life.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function GalleryLayout({ children }) {
  return children;
}
