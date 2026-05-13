import { Facebook, Instagram, MessageCircle, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useBooking } from "@/lib/booking-context";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function Footer() {
  const { t } = useI18n();
  const { openBooking } = useBooking();
  const links = [
    { id: "vehicles", k: "nav.vehicles" },
    { id: "services", k: "nav.services" },
    { id: "reviews", k: "nav.reviews" },
    { id: "gallery", k: "nav.gallery" },
    { id: "contact", k: "nav.contact" },
  ];
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur">
      <div className="container-luxe py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-gold text-gold-foreground font-bold">E</span>
              <div>
                <div className="font-display text-lg font-semibold">EMS Location</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Ouarzazate · Maroc</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/70 max-w-md">{t("footer.tag")}</p>
            <button
              onClick={() => openBooking()}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-5 py-2.5 text-xs font-medium hover:opacity-90 transition"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {t("nav.book")} WhatsApp
            </button>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold">{t("footer.links")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-foreground/75 hover:text-gold transition"
                  >
                    {t(l.k)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold">{t("footer.contact")}</h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/75">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>Ouarzazate 45200, Maroc</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> {WHATSAPP_DISPLAY}</li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href="https://web.facebook.com/emsrentalouarzazate/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition"><Facebook className="h-4 w-4" /></a>
              <a href="https://www.instagram.com/ems_location_ouarzazate?igsh=ZWo4azloYmdraGxu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition"><Instagram className="h-4 w-4" /></a>
              <a href="https://api.whatsapp.com/send?phone=212642695556" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} EMS Location de Voiture Ouarzazate. {t("footer.rights")}</div>
          <div>{t("footer.made")}</div>
        </div>
      </div>
    </footer>
  );
}
