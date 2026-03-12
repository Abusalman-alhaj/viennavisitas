import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: {
    default: "Vienna Visitas",
    template: "%s | Vienna Visitas",
  },
  description: "Photography · Videography · Digital Content · Tourism Guide — Capturing the soul, secrets, and seasonal beauty of Vienna.",
  keywords: ["Vienna photography", "Vienna videography", "Vienna tourism", "Vienna guide", "Vienna digital content", "Austria travel", "Vienna visitas"],
  authors: [{ name: "Vienna Visitas" }],
  creator: "Vienna Visitas",
  metadataBase: new URL("https://viennavisitas.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viennavisitas.com",
    siteName: "Vienna Visitas",
    title: "Vienna Visitas — Photography · Videography · Tourism",
    description: "Capturing the soul, secrets, and seasonal beauty of Vienna through photography, videography, and curated travel content.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vienna Visitas — Photography & Tourism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vienna Visitas — Photography · Videography · Tourism",
    description: "Capturing the soul, secrets, and seasonal beauty of Vienna.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background text-foreground" data-testid="main-layout-wrapper">
          <Header />
          <main className="pt-28" data-testid="site-main-content">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
