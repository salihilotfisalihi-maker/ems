import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./Vehicles";
import { buildContactMessage, openWhatsApp, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function Contact() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(buildContactMessage(name || "—", phone || "—", message || "—"));
  };

  const infos = [
    { icon: MapPin, label: t("contact.address"), value: t("contact.addressV") },
    { icon: Phone, label: t("contact.phone"), value: WHATSAPP_DISPLAY, href: `tel:+212642695556` },
    { icon: MessageCircle, label: t("contact.whatsapp"), value: WHATSAPP_DISPLAY, href: "https://wa.me/212642695556" },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hoursV") },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container-luxe">
        <SectionHeader eyebrow="Contact" title={t("contact.title")} sub={t("contact.sub")} />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {infos.map((info, i) => {
              const Icon = info.icon;
              const Inner = (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 rounded-2xl glass-strong p-5 shadow-card hover:bg-white/[0.07] transition"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{info.label}</div>
                    <div className="mt-1 text-sm md:text-base text-foreground/90">{info.value}</div>
                  </div>
                </motion.div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {Inner}
                </a>
              ) : <div key={info.label}>{Inner}</div>;
            })}

            <div className="overflow-hidden rounded-2xl border border-border h-64">
              <iframe
                title="Map Ouarzazate"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-6.92%2C30.91%2C-6.88%2C30.94&layer=mapnik&marker=30.9189%2C-6.8934"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl glass-strong p-6 md:p-8 shadow-card space-y-4">
            <h3 className="font-display text-2xl font-semibold">{t("contact.formTitle")}</h3>
            <Field label={t("contact.name")}>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="input-luxe" placeholder="Aziz" />
            </Field>
            <Field label={t("contact.tel")}>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} required type="tel" className="input-luxe" placeholder="+212 ..." />
            </Field>
            <Field label={t("contact.message")}>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="input-luxe resize-none" placeholder="..." />
            </Field>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-glow"
            >
              <Send className="h-4 w-4" />
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .input-luxe {
          width: 100%;
          background: oklch(1 0 0 / 0.04);
          border: 1px solid oklch(1 0 0 / 0.12);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: var(--color-foreground);
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        .input-luxe:focus {
          outline: none;
          border-color: var(--gold);
          background: oklch(1 0 0 / 0.07);
        }
        .input-luxe::placeholder { color: oklch(0.65 0.012 260); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block mb-1.5 text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
