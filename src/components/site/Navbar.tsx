import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { useBooking } from "@/lib/booking-context";

const links = [
  { id: "home", k: "nav.home" },
  { id: "vehicles", k: "nav.vehicles" },
  { id: "services", k: "nav.services" },
  { id: "reviews", k: "nav.reviews" },
  { id: "gallery", k: "nav.gallery" },
  { id: "contact", k: "nav.contact" },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-16 md:h-20 items-center justify-between gap-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-gold text-gold-foreground font-bold shadow-glow">
            E
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-base leading-tight font-semibold">EMS</span>
            <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">Ouarzazate</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-foreground/80 hover:text-gold transition-colors relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 hover:after:scale-x-100 after:bg-gold after:transition-transform after:origin-left"
            >
              {t(l.k)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher lang={lang} setLang={setLang} />
          <button
            onClick={() => openBooking()}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition shadow-glow"
          >
            <MessageCircle className="h-4 w-4" />
            {t("nav.book")}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass-strong border-t border-border"
        >
          <div className="container-luxe py-4 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-start py-3 px-2 rounded-md hover:bg-white/5"
              >
                {t(l.k)}
              </button>
            ))}
            <button
              onClick={() => openBooking()}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-4 py-3 text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4" /> {t("nav.book")}
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const langs: { code: Lang; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-2 text-xs font-medium hover:bg-white/10"
      >
        <Globe className="h-3.5 w-3.5" />
        {lang.toUpperCase()}
      </button>
      {open && (
        <div
          className="absolute end-0 mt-2 min-w-[100px] rounded-lg glass-strong shadow-card overflow-hidden"
          onMouseLeave={() => setOpen(false)}
        >
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`block w-full text-start px-4 py-2 text-sm hover:bg-white/10 ${lang === l.code ? "text-gold" : ""}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
