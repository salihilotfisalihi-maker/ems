import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useBooking } from "@/lib/booking-context";
import { useI18n } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const { t } = useI18n();
  const { openBooking } = useBooking();
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      onClick={() => openBooking()}
      aria-label="WhatsApp"
      className="fixed bottom-5 end-5 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-4 py-3 md:px-5 md:py-3.5 shadow-glow hover:scale-105 transition"
    >
      <span className="absolute inset-0 rounded-full bg-[var(--whatsapp)] animate-ping opacity-40" />
      <MessageCircle className="h-5 w-5 relative" />
      <span className="relative hidden sm:inline text-sm font-medium">{t("nav.book")}</span>
    </motion.button>
  );
}
