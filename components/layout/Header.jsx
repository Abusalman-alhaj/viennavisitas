"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/siteContent";

const serviceLinks = [
  { label: "Photography", to: "/services/photography" },
  { label: "Videography", to: "/services/videography" },
  { label: "Tourism & Digital Content", to: "/services/tourism-digital-content" },
];

const menuLinks = [
  { label: "Services", to: "/#services", hasDropdown: true },
  { label: "Things To Do", to: "/things-to-do" },
  { label: "Places", to: "/places" },
  { label: "Vienna Guide", to: "/vienna-guide" },
  { label: "Gallery", to: "/gallery" },
  { label: "Get Inspired", to: "/inspired" },
  { label: "Contact", to: "/#contact" },
];

const NavItem = ({ label, to, onClick, hasDropdown }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isHashLink = to.includes("#");
  const isActive = !isHashLink && (pathname === to || (hasDropdown && pathname.startsWith("/services")));

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (hasDropdown) {
    return (
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex items-center gap-1 text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
            isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-primary"
          }`}
        >
          {label}
          <ChevronDown size={12} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute left-0 top-full z-50 mt-2 min-w-[220px] border border-border bg-background shadow-lg">
            {serviceLinks.map((s) => (
              <Link
                key={s.to}
                href={s.to}
                onClick={() => { setOpen(false); onClick?.(); }}
                className={`block px-5 py-3 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-muted hover:text-primary ${
                  pathname === s.to ? "text-primary bg-muted" : "text-foreground/70"
                }`}
              >
                {s.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (isHashLink) {
    return (
      <a
        className="text-xs uppercase tracking-[0.18em] text-foreground/70 transition-colors duration-300 hover:text-primary"
        href={to}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={to}
      onClick={onClick}
      className={`text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
        isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-3 md:px-12 lg:px-16">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Vienna Visitas Logo"
            width={44}
            height={44}
            className="rounded-full object-contain transition-opacity duration-300 group-hover:opacity-80"
            priority
          />
          <div>
            <p className="font-heading text-xl leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
              {brand.name}
            </p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Every cobblestone has a story
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {menuLinks.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="mx-auto flex max-w-screen-2xl flex-col px-6 py-4">
            {/* Services expandable */}
            <button
              className="flex items-center justify-between py-3 text-xs uppercase tracking-[0.18em] text-foreground/70 hover:text-primary border-b border-border/40"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown size={12} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 border-b border-border/40">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    href={s.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-xs uppercase tracking-[0.16em] text-foreground/60 hover:text-primary"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            {/* Other links */}
            {menuLinks.filter(l => !l.hasDropdown).map((link) => (
              <NavItem key={link.label} {...link} onClick={() => setIsMenuOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};