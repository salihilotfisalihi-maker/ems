import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function WhyUs() {
  const { t } = useI18n();
  const stats = [
    { n: t("why.s1.n"), l: t("why.s1.l") },
    { n: t("why.s2.n"), l: t("why.s2.l") },
    { n: t("why.s3.n"), l: t("why.s3.l") },
    { n: t("why.s4.n"), l: t("why.s4.l") },
  ];
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container-luxe">
        <div className="rounded-3xl glass-strong p-8 md:p-14 shadow-card relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_oklch(0.78_0.14_78_/_0.15),_transparent_60%)]" />
          <div className="relative max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">EMS</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">{t("why.title")}</h2>
            <p className="mt-4 text-foreground/70">{t("why.sub")}</p>
          </div>
          <div className="relative mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-start"
              >
                <div className="font-display text-4xl md:text-5xl text-gradient-gold">{s.n}</div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-foreground/70">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
