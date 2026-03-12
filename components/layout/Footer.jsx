import Image from "next/image";
import { brand } from "@/data/siteContent";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-20 text-secondary-foreground" data-testid="site-footer">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-5 px-6 text-center md:px-12 lg:px-16">
        <Image
          src="/logo.png"
          alt="Vienna Visitas Logo"
          width={56}
          height={56}
          className="rounded-full object-contain opacity-90"
        />
        <p className="font-heading text-3xl" data-testid="footer-logo-text">
          {brand.name}
        </p>
        <p className="text-sm uppercase tracking-[0.2em] text-secondary-foreground/70" data-testid="footer-tagline-text">
          {brand.shortTagline}
        </p>
        <div className="flex items-center gap-4" data-testid="footer-social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-sm hover:text-primary transition-colors" data-testid="footer-facebook-link">
            Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-sm hover:text-primary transition-colors" data-testid="footer-instagram-link">
            Instagram
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="text-sm hover:text-primary transition-colors" data-testid="footer-tiktok-link">
            TikTok
          </a>
        </div>
        <p className="text-sm text-secondary-foreground/50" data-testid="footer-copyright-text">
          © 2025 Vienna Visitas
        </p>
      </div>
    </footer>
  );
};
