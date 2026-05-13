import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Star } from "lucide-react";
import heroImg from "@/assets/hero-desert.jpg";
import { useI18n } from "@/lib/i18n";
import { useBooking } from "@/lib/booking-context";

export function Hero() {
  const { t } = useI18n();
  const { openBooking } = useBooking();
  const scrollToVehicles = () => document.getElementById("vehicles")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury car in Moroccan desert near Ouarzazate" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_oklch(0.14_0.012_260)_0%,_transparent_70%)]" />
      </div>

      <div className="container-luxe relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-gold">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            {t("hero.eyebrow")}
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            {t("hero.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient-gold">{t("hero.title").split(" ").slice(-1)[0]}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-2xl">
            {t("hero.sub")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => openBooking()}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-glow"
            >
              <MessageCircle className="h-4 w-4" />
              {t("hero.cta1")}
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5 rtl:rotate-180" />
            </button>
            <button
              onClick={scrollToVehicles}
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
            >
              {t("hero.cta2")}
              <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
            {[t("hero.stat1"), t("hero.stat2"), t("hero.stat3")].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground/80"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-foreground/50"
      >
        scroll
      </motion.div>
    </section>
  );
}
