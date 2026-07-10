import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { REVIEWS, COMPANY } from "@/lib/site-data";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < count ? "fill-gold text-gold" : "text-muted-foreground/40",
          )}
        />
      ))}
    </div>
  );
}

function ReviewCard({ name, text, stars }: { name: string; text: string; stars: number }) {
  return (
    <figure className="glass flex w-[300px] shrink-0 flex-col gap-4 rounded-2xl p-6 shadow-[var(--shadow-glass)] sm:w-[360px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-primary-foreground">
            {name.charAt(0)}
          </span>
          <figcaption className="font-medium">{name}</figcaption>
        </div>
        <Stars count={stars} />
      </div>
      <blockquote className="text-sm leading-relaxed text-muted-foreground">“{text}”</blockquote>
    </figure>
  );
}

export function ReviewsCarousel() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <div className="text-center">
      <div className="mb-8 flex flex-col items-center gap-2">
        <Stars count={4} />
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{COMPANY.rating}</span> rating ·{" "}
          {COMPANY.reviewsCount} Google Reviews
        </p>
      </div>
      <div className="marquee-pause relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
        <div className="flex w-max animate-marquee gap-5">
          {loop.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </div>
  );
}
