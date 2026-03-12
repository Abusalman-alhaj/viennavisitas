import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CtaStrip = ({ title, description, buttonText, to, testIdPrefix }) => {
  return (
    <section className="px-6 py-10 md:px-12 lg:px-16" data-testid={`${testIdPrefix}-cta-strip`}>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 border border-border bg-card px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <h3 className="font-heading text-3xl md:text-4xl" data-testid={`${testIdPrefix}-cta-title`}>
            {title}
          </h3>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground" data-testid={`${testIdPrefix}-cta-description`}>
            {description}
          </p>
        </div>
        <Button asChild className="h-11 rounded-none px-8 uppercase tracking-[0.18em]" data-testid={`${testIdPrefix}-cta-button`}>
          <Link href={to}>
            {buttonText} <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
};
