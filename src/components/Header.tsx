import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Search, Menu, X, ChevronDown, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/woodlab-logo.png";
import { COMPANY } from "@/lib/site-data";
import { NAV_MENU, searchNav, type SearchEntry } from "@/lib/nav-data";
import { buildWhatsAppUrl } from "@/lib/site-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const searchWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setDrawerOpen(false);
    setFocused(false);
    setQuery("");
  }, [pathname]);

  // Escape closes drawer / search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        setFocused(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Body scroll lock while drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Click outside closes suggestions
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!searchWrapRef.current) return;
      if (!searchWrapRef.current.contains(e.target as Node)) setFocused(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const suggestions = useMemo<SearchEntry[]>(() => searchNav(query, 8), [query]);
  useEffect(() => setActiveIdx(0), [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      const target = suggestions[Math.min(activeIdx, suggestions.length - 1)];
      navigate({ to: target.path });
      setFocused(false);
      setQuery("");
    }
  };

  const onKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + suggestions.length) % suggestions.length);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-11 z-50 border-b border-border/60 bg-background transition-all duration-300",
          scrolled ? "shadow-sm backdrop-blur-md bg-background/95" : "",
        )}
      >
        <div
          className={cn(
            "flex w-full items-center gap-5 pl-[30px] pr-6 transition-all duration-300 sm:gap-8",
            scrolled ? "h-[70px] sm:h-[74px]" : "h-[70px] sm:h-[86px]",
          )}
        >
          {/* Hamburger */}
          <button
            type="button"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
            className="grid shrink-0 place-items-center rounded-md p-1 text-foreground transition-colors hover:bg-accent"
          >
            {drawerOpen ? (
              <X className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
            ) : (
              <Menu className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center" aria-label="Wood Lab home">
            <img
              src={logo}
              alt="Wood Lab Islamabad logo"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                scrolled ? "h-[42px] sm:h-[46px]" : "h-[45px] sm:h-[52px]",
              )}
            />
          </Link>

          {/* Search */}
          <div ref={searchWrapRef} className="relative ml-2 min-w-0 flex-1 sm:ml-4">
            <form onSubmit={handleSubmit} className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onKeyDown={onKeyDownSearch}
                placeholder="Search kitchens, wardrobes, doors, furniture..."
                aria-label="Search the site"
                className={cn(
                  "h-11 w-full rounded-full border border-border bg-background pl-11 pr-4 font-body text-sm text-foreground shadow-sm placeholder:text-muted-foreground/70 transition-all sm:h-12",
                  "focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30",
                )}
              />
            </form>

            {focused && query.trim().length > 0 && (
              <div className="animate-fade-in absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-[var(--shadow-glass)] backdrop-blur-xl">
                {suggestions.length === 0 ? (
                  <div className="px-5 py-6 text-center text-sm text-muted-foreground">
                    No matching results found.
                  </div>
                ) : (
                  <ul className="max-h-80 overflow-y-auto py-2">
                    {suggestions.map((s, i) => (
                      <li key={s.path}>
                        <button
                          type="button"
                          onMouseEnter={() => setActiveIdx(i)}
                          onClick={() => {
                            navigate({ to: s.path });
                            setFocused(false);
                            setQuery("");
                          }}
                          className={cn(
                            "flex w-full items-center justify-between gap-4 px-5 py-3 text-left text-sm transition-colors",
                            i === activeIdx ? "bg-accent" : "hover:bg-accent/60",
                          )}
                        >
                          <span className="truncate font-medium text-foreground">{s.label}</span>
                          {s.category && (
                            <span className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
                              {s.category}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Drawer */}
      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} pathname={pathname} />
    </>
  );
}


function NavDrawer({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  // Which group is expanded — auto-open the group containing the active route
  const initialExpanded = useMemo(() => {
    for (const item of NAV_MENU) {
      if (item.type === "group" && item.children.some((c) => c.path === pathname)) {
        return item.label;
      }
    }
    return null;
  }, [pathname]);

  const [expanded, setExpanded] = useState<string | null>(initialExpanded);

  useEffect(() => {
    if (open) setExpanded(initialExpanded);
  }, [open, initialExpanded]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute inset-y-0 left-0 flex w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border/50 px-6 py-5">
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
            <img src={logo} alt="Wood Lab logo" className="h-10 w-10 rounded-full object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold">Wood Lab</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Islamabad
              </span>
            </span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-colors hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col">
            {NAV_MENU.map((item) => {
              if (item.type === "link") {
                const active = pathname === item.path;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={cn(
                        "flex items-center rounded-xl px-4 py-3 font-display text-lg transition-colors",
                        active
                          ? "bg-accent text-foreground"
                          : "text-foreground/85 hover:bg-accent/60",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = expanded === item.label;
              const hasActive = item.children.some((c) => c.path === pathname);

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3 font-display text-lg transition-colors",
                      hasActive
                        ? "text-foreground"
                        : "text-foreground/85 hover:bg-accent/60",
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen ? "rotate-180 text-gold" : "text-muted-foreground",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-[350ms] ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <ul className="min-h-0">
                      {item.children.map((c) => {
                        const active = pathname === c.path;
                        return (
                          <li key={c.path}>
                            <Link
                              to={c.path}
                              onClick={onClose}
                              className={cn(
                                "ml-4 flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors",
                                active
                                  ? "bg-accent font-medium text-foreground"
                                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                              )}
                            >
                              <span
                                className={cn(
                                  "inline-block h-1 w-1 rounded-full transition-colors",
                                  active ? "bg-gold" : "bg-muted-foreground/40",
                                )}
                              />
                              {c.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border/50 px-6 py-6">
          <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="Wood Lab logo" className="h-12 w-12 rounded-full object-contain" />
            <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {COMPANY.tagline}
            </p>
            <div className="flex items-center gap-2">
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 2C6.58 2 2.16 6.4 2.16 11.83c0 1.94.508 3.767 1.474 5.42L2 22l4.87-1.6a9.87 9.87 0 0 0 5.16 1.44h.004c5.46 0 9.884-4.4 9.884-9.83S17.5 2 12.04 2z" />
    </svg>
  );
}
