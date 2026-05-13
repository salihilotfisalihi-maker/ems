import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Check, ShieldCheck, Send, Car as CarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { type Car, CARS } from "@/lib/cars";
import { useI18n } from "@/lib/i18n";
import { buildBookingMessage, openWhatsApp } from "@/lib/whatsapp";

export function VehicleModal({ 
  isOpen,
  car: initialCar, 
  onClose, 
  initialStep = "details" 
}: { 
  isOpen: boolean;
  car: Car | null; 
  onClose: () => void; 
  initialStep?: "details" | "form" 
}) {
  const { t } = useI18n();
  const [step, setStep] = useState<"details" | "form">(initialStep);
  const [selectedCar, setSelectedCar] = useState<Car | null>(initialCar);
  
  // Form state
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    location: "",
    name: "",
    phone: ""
  });

  // Sync internal state with props when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedCar(initialCar);
      setStep(initialStep);
    }
  }, [isOpen, initialCar, initialStep]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCar) return;
    openWhatsApp(buildBookingMessage(selectedCar.name, formData));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-strong shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute end-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/50 hover:bg-black/70 text-white transition pointer-events-auto"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-secondary">
                {selectedCar ? (
                  <img src={selectedCar.image} alt={selectedCar.name} className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-12 text-center bg-card/20">
                    <CarIcon className="h-16 w-16 mb-4 opacity-20" />
                    <p className="text-sm uppercase tracking-widest">{t("nav.book")}</p>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                {step === "details" && selectedCar ? (
                  <>
                    <span className="inline-block text-xs uppercase tracking-[0.25em] text-gold">{selectedCar.category}</span>
                    <h3 className="mt-2 font-display text-3xl font-semibold">{selectedCar.name}</h3>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-3xl text-gradient-gold">{selectedCar.pricePerDay} MAD</span>
                      <span className="text-sm text-muted-foreground">{t("vehicles.perDay")}</span>
                    </div>

                    <Block title={t("modal.features")}>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <Item>{selectedCar.transmission}</Item>
                        <Item>{selectedCar.fuel}</Item>
                        <Item>{selectedCar.seats} {t("vehicles.seats").toLowerCase()}</Item>
                        {selectedCar.ac && <Item>{t("vehicles.ac")}</Item>}
                        {selectedCar.features.map((f) => <Item key={f}>{f}</Item>)}
                      </div>
                    </Block>

                    <Block title={t("modal.conditions")}>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <Item>{t("modal.cond1")}</Item>
                        <Item>{t("modal.cond2")}</Item>
                        <Item>{t("modal.cond3")}</Item>
                        <Item>{t("modal.cond4")}</Item>
                      </ul>
                    </Block>

                    <Block title={t("modal.insurance")} icon={<ShieldCheck className="h-4 w-4 text-gold" />}>
                      <ul className="space-y-1.5 text-sm text-foreground/80">
                        <Item>{t("modal.ins1")}</Item>
                        <Item>{t("modal.ins2")}</Item>
                        <Item>{t("modal.ins3")}</Item>
                      </ul>
                    </Block>

                    <button
                      onClick={() => setStep("form")}
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold text-gold-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-glow"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {t("vehicles.book")}
                    </button>
                  </>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {initialCar && (
                      <button 
                        type="button" 
                        onClick={() => setStep("details")}
                        className="text-xs uppercase tracking-widest text-gold hover:underline mb-2"
                      >
                        ← {t("nav.home")}
                      </button>
                    )}
                    <h3 className="font-display text-2xl font-semibold mb-6">
                      {t("nav.book")} {selectedCar ? `: ${selectedCar.name}` : ""}
                    </h3>
                    
                    {!initialCar && (
                      <Field label={t("nav.vehicles")}>
                        <select 
                          required 
                          className="input-luxe appearance-none" 
                          value={selectedCar?.id || ""}
                          onChange={(e) => setSelectedCar(CARS.find(c => c.id === e.target.value) || null)}
                        >
                          <option value="" disabled>{t("hero.cta2")}</option>
                          {CARS.map(c => (
                            <option key={c.id} value={c.id}>{c.name} ({c.pricePerDay} MAD/j)</option>
                          ))}
                        </select>
                      </Field>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <Field label={t("booking.startDate")}>
                        <input 
                          type="date" 
                          required 
                          className="input-luxe" 
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.startDate}
                          onChange={e => {
                            const newStart = e.target.value;
                            setFormData(prev => ({
                              ...prev, 
                              startDate: newStart,
                              endDate: prev.endDate && prev.endDate < newStart ? newStart : prev.endDate
                            }));
                          }}
                        />
                      </Field>
                      <Field label={t("booking.endDate")}>
                        <input 
                          type="date" 
                          required 
                          className="input-luxe" 
                          min={formData.startDate || new Date().toISOString().split("T")[0]}
                          value={formData.endDate}
                          onChange={e => setFormData({...formData, endDate: e.target.value})}
                        />
                      </Field>
                    </div>

                    <Field label={t("booking.location")}>
                      <input 
                        placeholder={t("booking.locationPlaceholder")} 
                        required 
                        className="input-luxe" 
                        value={formData.location}
                        onChange={e => setFormData({...formData, location: e.target.value})}
                      />
                    </Field>

                    <Field label={t("contact.name")}>
                      <input 
                        placeholder="Aziz" 
                        required 
                        className="input-luxe" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </Field>

                    <Field label={t("contact.tel")}>
                      <input 
                        type="tel" 
                        placeholder="+212 ..." 
                        required 
                        className="input-luxe" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={!selectedCar}
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-6 py-3.5 text-sm font-medium hover:opacity-90 disabled:opacity-50 transition shadow-glow"
                    >
                      <Send className="h-4 w-4" />
                      {t("contact.send")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
        select.input-luxe {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='oklch(0.7 0.04 40)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1rem;
          padding-right: 2.5rem;
        }
      `}</style>
    </AnimatePresence>
  );
}

function Block({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h4 className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground">
        {icon}
        {title}
      </h4>
      {children}
    </div>
  );
}
function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
      <span>{children}</span>
    </li>
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
