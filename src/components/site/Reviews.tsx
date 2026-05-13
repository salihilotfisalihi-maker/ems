import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Vehicles";

const reviews = [
  { name: "Mohamed A.", text: "La location chez EMS à Ouarzazate est réputée pour son service de qualité et sa garantie." },
  { name: "Sara L.", text: "Accueil très agréable ! Aziz est très arrangeant et super professionnel." },
  { name: "Yassine B.", text: "Voiture très propre et conforme à la réservation." },
];

export function Reviews() {
  const { t } = useI18n();
  return (
    <section id="reviews" className="py-24 md:py-32 relative">
      <div className="container-luxe">
        <SectionHeader eyebrow="Reviews" title={t("reviews.title")} sub={t("reviews.sub")} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl glass-strong p-6 shadow-card hover:shadow-glow transition"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/85 leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-gold-foreground font-semibold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Google Review</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
