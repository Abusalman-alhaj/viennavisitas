"use client";

import { useState } from "react";
import { ArrowRight, Camera, Mail, MessageCircle, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CtaStrip } from "@/components/shared/CtaStrip";
import { aboutStats, brand, exploreCards, services, socialLinks } from "@/data/siteContent";
import { submitContactForm } from "@/lib/api";

const serviceIcons = {
  Photography: Camera,
  Videography: Video,
  "Tourism & Digital Content": ArrowRight,
};

const initialFormData = {
  name: "",
  email: "",
  project_type: "Photography",
  message: "",
};

export default function HomePage() {
  const [contactForm, setContactForm] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);

  const onFieldChange = (event) => {
    const { name, value } = event.target;
    setContactForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setIsSending(true);

    try {
      await submitContactForm(contactForm);
      setContactForm(initialFormData);
      toast.success("Thanks! Your message has been sent.");
    } catch (error) {
      toast.error("Unable to send now. Please try again in a moment.");
      console.error("Contact form error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <section className="relative min-h-[88vh] px-6 pb-16 md:px-12 lg:px-16" data-testid="home-hero-section">
        <div
          className="relative mx-auto flex min-h-[80vh] w-full max-w-screen-2xl items-end overflow-hidden border border-border"
        >
          <Image
            src="/images/hero.jpg"
            alt="Vienna street"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="grain-layer absolute inset-0" />
          <div className="relative z-10 flex w-full flex-col gap-4 px-6 py-16 text-white md:px-12 lg:px-16 soft-reveal">
            <p className="text-sm uppercase tracking-[0.22em] text-white/80" data-testid="hero-tagline-text">
              {brand.tagline}
            </p>
            <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl" data-testid="hero-headline-text">
              {brand.headline}
            </h1>
            <p className="max-w-2xl text-base text-white/90 md:text-lg" data-testid="hero-subheading-text">
              {brand.subheading}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3" data-testid="hero-buttons-group">
              <Button asChild className="h-11 rounded-none px-8 uppercase tracking-[0.18em]" data-testid="hero-follow-journey-button">
                <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
                  Follow the Journey
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-none border-white/60 bg-transparent px-8 text-white hover:bg-white hover:text-foreground"
                data-testid="hero-get-in-touch-button"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 md:px-12 lg:px-16" data-testid="explore-vienna-grid-section">
        <div className="mx-auto w-full max-w-screen-2xl">
          <h2 className="text-2xl sm:text-3xl" data-testid="explore-grid-heading-text">Explore Vienna</h2>
          <p className="mt-1 text-xs text-muted-foreground" data-testid="explore-grid-subheading-text">
            Practical guides, visual stories, and seasonal ideas curated for you.
          </p>

          {/* 2 rows × 28vh = 56vh total — always fits on screen regardless of height */}
          <div
            className="mt-3 hidden md:grid md:grid-cols-12"
            style={{gridAutoRows: "28vh", gap: "8px"}}
            data-testid="explore-grid-cards-wrapper"
          >
            {exploreCards.map((card, i) => (
              <Link
                key={card.title}
                href={card.path}
                className={`group relative overflow-hidden border border-border ${card.span}`}
                data-testid={`explore-card-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1200px) 58vw, 50vw" priority={i === 0} loading={i === 0 ? undefined : "lazy"} />
                <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end px-5 py-5 text-white">
                  <p className="text-lg font-heading leading-tight" data-testid={`explore-card-title-${card.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    {card.title}
                  </p>
                  <p className="mt-1 text-xs text-white/75 max-w-xs leading-snug">
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile — horizontal scroll strip */}
          <div className="mt-3 flex gap-3 overflow-x-auto md:hidden pb-2" style={{scrollSnapType: "x mandatory"}}>
            {exploreCards.map((card, i) => (
              <Link
                key={card.title}
                href={card.path}
                className="group relative shrink-0 overflow-hidden border border-border"
                style={{width: "72vw", height: "180px", scrollSnapAlign: "start"}}
                data-testid={`explore-card-mobile-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Image src={card.image} alt={card.title} fill className="object-cover" sizes="72vw" loading={i === 0 ? undefined : "lazy"} priority={i === 0} />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 flex flex-col justify-end px-4 py-4 text-white">
                  <p className="text-base font-heading">{card.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-12 lg:px-16" data-testid="about-section">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-8 border border-border bg-card p-6 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-primary" data-testid="about-eyebrow-text">
              About Vienna Visitas
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl" data-testid="about-heading-text">
              Vienna seen through different eyes
            </h2>
            <p className="mt-4 text-base text-muted-foreground" data-testid="about-description-text">
              I work as a photographer, videographer, digital creator, and local guide — combining visual direction with on-the-ground city knowledge to capture Vienna in a way that feels intimate and alive.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4" data-testid="about-stats-grid">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="editorial-card p-6" data-testid={`about-stat-card-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <p className="font-heading text-4xl text-primary">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-8 md:px-12 lg:px-16" data-testid="services-section">
        <div className="mx-auto w-full max-w-screen-2xl">
          <h2 className="text-4xl sm:text-5xl" data-testid="services-heading-text">
            Services
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground" data-testid="services-subheading-text">
            Production and storytelling services crafted for destinations, campaigns, and cultural experiences.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3" data-testid="services-cards-grid">
            {services.map((service) => {
              const Icon = serviceIcons[service.title] || ArrowRight;
              return (
                <Link
                  key={service.title}
                  href={service.path}
                  className="group relative overflow-hidden border border-border block"
                  style={{minHeight: "340px"}}
                  data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {/* Background image */}
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/55 transition-colors duration-500 group-hover:bg-black/40" />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-white/80" />
                      <h3 className="text-2xl font-heading leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">{service.description}</p>
                    <ul className="mt-3 space-y-1">
                      {service.items.map((item) => (
                        <li key={item} className="text-xs text-white/65">— {item}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                      <span>View Service</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-8 md:px-12 lg:px-16" data-testid="contact-section">
        <div className="mx-auto grid w-full max-w-screen-2xl gap-8 border border-border bg-card p-6 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-4xl sm:text-5xl" data-testid="contact-heading-text">
              Get in Touch
            </h2>
            <p className="mt-3 text-base text-muted-foreground" data-testid="contact-subheading-text">
              Planning content, a campaign, or a travel collaboration in Vienna? Send your details and I will get back to you.
            </p>

            <div className="mt-6 space-y-3" data-testid="contact-details-block">
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-base hover:text-primary" data-testid="contact-email-link">
                <Mail size={16} /> {brand.email}
              </a>
              <a href="https://wa.me/4367763471701" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base hover:text-primary" data-testid="contact-whatsapp-link">
                <MessageCircle size={16} /> {brand.whatsapp}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3" data-testid="contact-social-links-group">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary">
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={onSubmitForm} data-testid="contact-form">
            <label className="block text-sm uppercase tracking-[0.16em]" htmlFor="name">Name</label>
            <Input id="name" name="name" value={contactForm.name} onChange={onFieldChange} required className="rounded-none" data-testid="contact-name-input" />

            <label className="block text-sm uppercase tracking-[0.16em]" htmlFor="email">Email</label>
            <Input id="email" name="email" type="email" value={contactForm.email} onChange={onFieldChange} required className="rounded-none" data-testid="contact-email-input" />

            <label className="block text-sm uppercase tracking-[0.16em]" htmlFor="project_type">Project type</label>
            <Input id="project_type" name="project_type" value={contactForm.project_type} onChange={onFieldChange} required className="rounded-none" data-testid="contact-project-type-input" />

            <label className="block text-sm uppercase tracking-[0.16em]" htmlFor="message">Message</label>
            <Textarea id="message" name="message" value={contactForm.message} onChange={onFieldChange} required className="min-h-[130px] rounded-none" data-testid="contact-message-input" />

            <Button type="submit" className="h-11 w-full rounded-none uppercase tracking-[0.18em]" disabled={isSending} data-testid="contact-submit-button">
              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      <CtaStrip
        title="Ready to explore your first route?"
        description="Start with nine must-do experiences designed to help you feel the pulse of Vienna from day one."
        buttonText="Open Things To Do"
        to="/things-to-do"
        testIdPrefix="home"
      />
    </>
  );
}