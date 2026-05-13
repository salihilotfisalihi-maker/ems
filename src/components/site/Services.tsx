import { motion } from "framer-motion";
import { Calendar, CalendarRange, Plane, LifeBuoy, UserCog, Mountain } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Vehicles";

export function Services() {
  const { t } = useI18n();
  const services = [
    { icon: Calendar, k: "service.short" },
    { icon: CalendarRange, k: "service.long" },
    { icon: Plane, k: "service.airport" },
    { icon: LifeBuoy, k: "service.assist" },
    { icon: UserCog, k: "service.driver" },
    { icon: Mountain, k: "service.tour" },
  ];
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container-luxe">
        <SectionHeader eyebrow="Services" title={t("services.title")} sub={t("services.sub")} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl glass-strong p-6 hover:bg-white/[0.07] transition shadow-card"
              >
                <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-gradient-gold opacity-10 group-hover:opacity-20 transition" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{t(s.k)}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{t(s.k + ".d")}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
