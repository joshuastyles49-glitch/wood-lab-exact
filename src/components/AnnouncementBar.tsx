import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

const message = `DELIVERY ALL OVER THE PAKISTAN CALL AT ${COMPANY.phone}`;

export function AnnouncementBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] overflow-hidden border-b border-white/10 bg-primary py-2.5 text-primary-foreground shadow-sm">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...Array(8)].map((_, i) => (
          <a
            key={i}
            href={`tel:${COMPANY.phoneIntl}`}
            className="mx-8 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wider transition-colors hover:text-gold sm:text-base"
          >
            <Phone className="h-4 w-4 fill-current" />
            <span>{message}</span>
            <span className="mx-2 text-gold">•</span>
          </a>
        ))}
      </div>
    </div>
  );
}
