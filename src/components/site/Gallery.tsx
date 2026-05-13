import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Vehicles";
import aitben from "@/assets/gallery-aitbenhaddou.jpg";
import desert from "@/assets/gallery-desert.jpg";
import airport from "@/assets/gallery-airport.jpg";
import prado from "@/assets/car-prado.jpg";
import rangerover from "@/assets/car-rangerover.jpg";
import clio from "@/assets/car-clio.jpg";

const items = [
  { src: aitben, alt: "Aït Ben Haddou", span: "md:col-span-2 md:row-span-2" },
  { src: desert, alt: "Sahara desert", span: "" },
  { src: prado, alt: "Toyota Prado", span: "" },
  { src: airport, alt: "Ouarzazate airport", span: "md:col-span-2" },
  { src: rangerover, alt: "Range Rover Sport", span: "" },
  { src: clio, alt: "Renault Clio", span: "" },
];

export function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="py-24 md:py-32 relative">
      <div className="container-luxe">
        <SectionHeader eyebrow="Gallery" title={t("gallery.title")} sub={t("gallery.sub")} />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl shadow-card group ${it.span}`}
            >
              <img src={it.src} alt={it.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 start-3 text-xs uppercase tracking-widest text-white/90">{it.alt}</div>
            </motion.div>
          ))}
        </div>

        {/* Tourism strip */}
        <div className="mt-20">
          <SectionHeader eyebrow="Tourism" title={t("tourism.title")} sub={t("tourism.sub")} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { k: "tourism.aitben", img: aitben },
              { k: "tourism.desert", img: desert },
              { k: "tourism.marrakech", img: airport },
            ].map((c) => (
              <div key={c.k} className="relative overflow-hidden rounded-2xl group h-64 shadow-card">
                <img src={c.img} alt={t(c.k)} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-white">{t(c.k)}</h3>
                  <p className="mt-1 text-sm text-white/80">{t(c.k + ".d")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
