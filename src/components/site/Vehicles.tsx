import { motion } from "framer-motion";
import { Fuel, Settings2, Users, Snowflake, MessageCircle, ArrowRight } from "lucide-react";
import { CARS } from "@/lib/cars";
import { useI18n } from "@/lib/i18n";
import { useBooking } from "@/lib/booking-context";

export function Vehicles() {
  const { t } = useI18n();
  const { openBooking } = useBooking();

  return (
    <section id="vehicles" className="py-24 md:py-32 relative">
      <div className="container-luxe">
        <SectionHeader eyebrow="Fleet" title={t("vehicles.title")} sub={t("vehicles.sub")} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARS.map((car, i) => (
            <motion.article
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass-strong shadow-card hover:shadow-glow transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 start-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
                  {car.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{car.name}</h3>
                  <div className="text-end">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("vehicles.from")}</div>
                    <div className="font-display text-gold text-lg">
                      {car.pricePerDay} <span className="text-xs text-muted-foreground">MAD{t("vehicles.perDay")}</span>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-foreground/75">
                  <Feature icon={<Settings2 className="h-3.5 w-3.5" />}>{car.transmission}</Feature>
                  <Feature icon={<Fuel className="h-3.5 w-3.5" />}>{car.fuel}</Feature>
                  <Feature icon={<Users className="h-3.5 w-3.5" />}>{car.seats} {t("vehicles.seats").toLowerCase()}</Feature>
                  <Feature icon={<Snowflake className="h-3.5 w-3.5" />}>{car.ac ? t("vehicles.ac") : "—"}</Feature>
                </ul>

                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => openBooking(car, "details")}
                    className="flex-1 rounded-full glass px-4 py-2.5 text-xs font-medium hover:bg-white/10 transition inline-flex items-center justify-center gap-1.5"
                  >
                    {t("vehicles.details")}
                    <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={() => openBooking(car, "form")}
                    className="flex-1 rounded-full bg-[var(--whatsapp)] text-white px-4 py-2.5 text-xs font-medium hover:opacity-90 transition inline-flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    {t("vehicles.book")}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="inline-flex items-center gap-1.5">
      <span className="text-gold">{icon}</span>
      {children}
    </li>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-foreground/70 text-base md:text-lg">{sub}</p>}
    </div>
  );
}
