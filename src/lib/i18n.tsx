import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "ar";

type Dict = Record<string, string>;

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.vehicles": "Véhicules",
  "nav.services": "Services",
  "nav.reviews": "Avis",
  "nav.gallery": "Galerie",
  "nav.contact": "Contact",
  "nav.book": "Réserver",

  "hero.eyebrow": "Location de voitures premium · Ouarzazate",
  "hero.title": "Location de Voitures Premium à Ouarzazate",
  "hero.sub": "Des voitures fiables, propres et disponibles 24h/24 pour vos voyages à Ouarzazate et partout au Maroc.",
  "hero.cta1": "Réserver sur WhatsApp",
  "hero.cta2": "Voir les véhicules",
  "hero.stat1": "5.0 ★ sur Google",
  "hero.stat2": "Service 24h/24",
  "hero.stat3": "Livraison aéroport",

  "vehicles.title": "Notre Flotte",
  "vehicles.sub": "Des citadines aux 4x4 de luxe, choisissez le véhicule parfait pour votre voyage.",
  "vehicles.details": "Voir détails",
  "vehicles.book": "Réserver maintenant",
  "vehicles.from": "À partir de",
  "vehicles.perDay": "/ jour",
  "vehicles.transmission": "Transmission",
  "vehicles.fuel": "Carburant",
  "vehicles.seats": "Places",
  "vehicles.ac": "Climatisation",

  "modal.gallery": "Galerie",
  "modal.features": "Caractéristiques",
  "modal.conditions": "Conditions de location",
  "modal.insurance": "Assurance",
  "modal.cond1": "Âge minimum : 21 ans",
  "modal.cond2": "Permis valide depuis 2 ans minimum",
  "modal.cond3": "Caution requise (carte ou espèces)",
  "modal.cond4": "Kilométrage illimité",
  "modal.ins1": "Assurance tous risques incluse",
  "modal.ins2": "Assistance routière 24h/24",
  "modal.ins3": "Vol et incendie couverts",

  "services.title": "Nos Services",
  "services.sub": "Une gamme complète pour répondre à tous vos besoins de mobilité.",
  "service.short": "Location courte durée",
  "service.short.d": "Du jour au week-end, flexible et rapide.",
  "service.long": "Location longue durée",
  "service.long.d": "Tarifs préférentiels au mois ou plus.",
  "service.airport": "Livraison aéroport",
  "service.airport.d": "Récupération à l'aéroport d'Ouarzazate.",
  "service.assist": "Assistance 24h/24",
  "service.assist.d": "Une équipe disponible jour et nuit.",
  "service.driver": "Chauffeur privé",
  "service.driver.d": "Chauffeur expérimenté à votre service.",
  "service.tour": "Voyage touristique désert",
  "service.tour.d": "Excursions Sahara, Aït Ben Haddou, Merzouga.",

  "why.title": "Pourquoi nous choisir",
  "why.sub": "L'expérience EMS, c'est la confiance, la qualité et la simplicité.",
  "why.s1.n": "5.0", "why.s1.l": "Note Google",
  "why.s2.n": "24/7", "why.s2.l": "Disponibilité",
  "why.s3.n": "100%", "why.s3.l": "Véhicules assurés",
  "why.s4.n": "1 min", "why.s4.l": "Réservation WhatsApp",

  "reviews.title": "Ce que disent nos clients",
  "reviews.sub": "5.0 ★ basé sur 19 avis Google",

  "gallery.title": "Galerie",
  "gallery.sub": "Ouarzazate, the desert and our véhicules.",

  "contact.title": "Contactez-nous",
  "contact.sub": "Disponible 24h/24, 7j/7. Réponse en quelques minutes.",
  "contact.address": "Adresse",
  "contact.addressV": "PHARMACY KABIRI, RENTAL EMS CAR OUARZAZATE, près de PARA, Ouarzazate 45200, Maroc",
  "contact.phone": "Téléphone",
  "contact.whatsapp": "WhatsApp",
  "contact.hours": "Horaires",
  "contact.hoursV": "Ouvert 24h/24",
  "contact.formTitle": "Envoyez-nous un message",
  "contact.name": "Votre nom",
  "contact.tel": "Téléphone",
  "contact.message": "Message",
  "contact.send": "Envoyer sur WhatsApp",

  "tourism.title": "Pour les voyageurs",
  "tourism.sub": "Découvrez le sud du Maroc à votre rythme.",
  "tourism.aitben": "Aït Ben Haddou",
  "tourism.aitben.d": "Le célèbre ksar classé à l'UNESCO, à 30 min d'Ouarzazate.",
  "tourism.desert": "Excursions désert",
  "tourism.desert.d": "Merzouga, Zagora, Erg Chebbi — partez à l'aventure.",
  "tourism.marrakech": "Marrakech ↔ Ouarzazate",
  "tourism.marrakech.d": "Road-trip légendaire par le col du Tichka.",

  "footer.tag": "Location de voitures premium à Ouarzazate, Maroc.",
  "footer.links": "Liens rapides",
  "footer.contact": "Contact",
  "footer.rights": "Tous droits réservés.",
  "footer.made": "Fait avec ❤️ au Maroc",

  "booking.startDate": "Date de début",
  "booking.endDate": "Date de retour",
  "booking.location": "Lieu de prise en charge",
  "booking.locationPlaceholder": "Aéroport, Hôtel, EMS Office...",
};

const en: Dict = {
  "nav.home": "Home", "nav.vehicles": "Vehicles", "nav.services": "Services",
  "nav.reviews": "Reviews", "nav.gallery": "Gallery", "nav.contact": "Contact", "nav.book": "Book",

  "hero.eyebrow": "Premium car rental · Ouarzazate",
  "hero.title": "Premium Car Rental in Ouarzazate",
  "hero.sub": "Reliable, clean cars available 24/7 for your travels across Ouarzazate and Morocco.",
  "hero.cta1": "Book on WhatsApp", "hero.cta2": "View vehicles",
  "hero.stat1": "5.0 ★ on Google", "hero.stat2": "24/7 service", "hero.stat3": "Airport delivery",

  "vehicles.title": "Our Fleet",
  "vehicles.sub": "From city cars to luxury 4x4s, find the perfect vehicle for your trip.",
  "vehicles.details": "View details", "vehicles.book": "Book now",
  "vehicles.from": "From", "vehicles.perDay": "/ day",
  "vehicles.transmission": "Transmission", "vehicles.fuel": "Fuel",
  "vehicles.seats": "Seats", "vehicles.ac": "Air conditioning",

  "modal.gallery": "Gallery", "modal.features": "Features",
  "modal.conditions": "Rental conditions", "modal.insurance": "Insurance",
  "modal.cond1": "Minimum age: 21", "modal.cond2": "Driving license held for 2+ years",
  "modal.cond3": "Deposit required (card or cash)", "modal.cond4": "Unlimited mileage",
  "modal.ins1": "Comprehensive insurance included",
  "modal.ins2": "24/7 roadside assistance", "modal.ins3": "Theft and fire covered",

  "services.title": "Our Services",
  "services.sub": "A full range of mobility services for every need.",
  "service.short": "Short-term rental", "service.short.d": "From a day to a weekend, flexible and fast.",
  "service.long": "Long-term rental", "service.long.d": "Preferred rates by the month or more.",
  "service.airport": "Airport delivery", "service.airport.d": "Pickup at Ouarzazate airport.",
  "service.assist": "24/7 assistance", "service.assist.d": "A team available day and night.",
  "service.driver": "Private driver", "service.driver.d": "Experienced driver at your service.",
  "service.tour": "Desert tours", "service.tour.d": "Sahara, Aït Ben Haddou, Merzouga.",

  "why.title": "Why choose us",
  "why.sub": "Trust, quality and simplicity — the EMS experience.",
  "why.s1.n": "5.0", "why.s1.l": "Google rating",
  "why.s2.n": "24/7", "why.s2.l": "Availability",
  "why.s3.n": "100%", "why.s3.l": "Insured cars",
  "why.s4.n": "1 min", "why.s4.l": "WhatsApp booking",

  "reviews.title": "What our customers say",
  "reviews.sub": "5.0 ★ based on 19 Google reviews",

  "gallery.title": "Gallery", "gallery.sub": "Ouarzazate, the desert and our vehicles.",

  "contact.title": "Contact us",
  "contact.sub": "Available 24/7. Reply within minutes.",
  "contact.address": "Address",
  "contact.addressV": "PHARMACY KABIRI, RENTAL EMS CAR OUARZAZATE, near PARA, Ouarzazate 45200, Morocco",
  "contact.phone": "Phone", "contact.whatsapp": "WhatsApp",
  "contact.hours": "Hours", "contact.hoursV": "Open 24/7",
  "contact.formTitle": "Send us a message",
  "contact.name": "Your name", "contact.tel": "Phone",
  "contact.message": "Message", "contact.send": "Send on WhatsApp",

  "tourism.title": "For travelers", "tourism.sub": "Discover southern Morocco at your own pace.",
  "tourism.aitben": "Aït Ben Haddou", "tourism.aitben.d": "The famous UNESCO ksar, 30 min from Ouarzazate.",
  "tourism.desert": "Desert tours", "tourism.desert.d": "Merzouga, Zagora, Erg Chebbi — adventure awaits.",
  "tourism.marrakech": "Marrakech ↔ Ouarzazate", "tourism.marrakech.d": "Legendary road trip via the Tichka pass.",

  "footer.tag": "Premium car rental in Ouarzazate, Morocco.",
  "footer.links": "Quick links", "footer.contact": "Contact",
  "footer.rights": "All rights reserved.", "footer.made": "Made with ❤️ in Morocco",

  "booking.startDate": "Start date",
  "booking.endDate": "Return date",
  "booking.location": "Pickup location",
  "booking.locationPlaceholder": "Airport, Hotel, EMS Office...",
};

const ar: Dict = {
  "nav.home": "الرئيسية", "nav.vehicles": "السيارات", "nav.services": "الخدمات",
  "nav.reviews": "التقييمات", "nav.gallery": "المعرض", "nav.contact": "اتصل بنا", "nav.book": "احجز",

  "hero.eyebrow": "تأجير سيارات فاخرة · ورزازات",
  "hero.title": "تأجير سيارات فاخرة في ورزازات",
  "hero.sub": "سيارات موثوقة ونظيفة متوفرة 24/24 لرحلاتك في ورزازات وجميع أنحاء المغرب.",
  "hero.cta1": "احجز عبر واتساب", "hero.cta2": "عرض السيارات",
  "hero.stat1": "5.0 ★ على جوجل", "hero.stat2": "خدمة 24/24", "hero.stat3": "توصيل بالمطار",

  "vehicles.title": "أسطولنا",
  "vehicles.sub": "من سيارات المدينة إلى الدفع الرباعي الفاخر، اختر السيارة المناسبة.",
  "vehicles.details": "عرض التفاصيل", "vehicles.book": "احجز الآن",
  "vehicles.from": "ابتداءً من", "vehicles.perDay": "/ يوم",
  "vehicles.transmission": "ناقل الحركة", "vehicles.fuel": "الوقود",
  "vehicles.seats": "المقاعد", "vehicles.ac": "تكييف",

  "modal.gallery": "معرض الصور", "modal.features": "المميزات",
  "modal.conditions": "شروط التأجير", "modal.insurance": "التأمين",
  "modal.cond1": "السن الأدنى: 21 سنة", "modal.cond2": "رخصة سياقة سارية منذ سنتين على الأقل",
  "modal.cond3": "تأمين مطلوب (بطاقة أو نقداً)", "modal.cond4": "مسافة غير محدودة",
  "modal.ins1": "تأمين شامل مدرج", "modal.ins2": "مساعدة على الطريق 24/24", "modal.ins3": "تغطية السرقة والحريق",

  "services.title": "خدماتنا", "services.sub": "مجموعة كاملة من خدمات التنقل لكل احتياجاتك.",
  "service.short": "تأجير قصير المدى", "service.short.d": "من يوم إلى عطلة نهاية الأسبوع.",
  "service.long": "تأجير طويل المدى", "service.long.d": "أسعار مميزة شهرياً أو أكثر.",
  "service.airport": "توصيل بالمطار", "service.airport.d": "استلام بمطار ورزازات.",
  "service.assist": "مساعدة 24/24", "service.assist.d": "فريق متاح ليلاً ونهاراً.",
  "service.driver": "سائق خاص", "service.driver.d": "سائق ذو خبرة في خدمتك.",
  "service.tour": "رحلات الصحراء", "service.tour.d": "الصحراء، آيت بن حدو، مرزوكة.",

  "why.title": "لماذا تختارنا", "why.sub": "الثقة والجودة والبساطة — تجربة EMS.",
  "why.s1.n": "5.0", "why.s1.l": "تقييم جوجل",
  "why.s2.n": "24/7", "why.s2.l": "متوفر دائماً",
  "why.s3.n": "100%", "why.s3.l": "سيارات مؤمنة",
  "why.s4.n": "1 د", "why.s4.l": "حجز واتساب",

  "reviews.title": "ماذا يقول عملاؤنا", "reviews.sub": "5.0 ★ بناءً على 19 تقييم جوجل",

  "gallery.title": "المعرض", "gallery.sub": "ورزازات، الصحراء وسياراتنا.",

  "contact.title": "اتصل بنا", "contact.sub": "متاح 24/24، 7/7. الرد خلال دقائق.",
  "contact.address": "العنوان",
  "contact.addressV": "صيدلية كبيري، EMS لتأجير السيارات بورزازات، قرب PARA، ورزازات 45200، المغرب",
  "contact.phone": "الهاتف", "contact.whatsapp": "واتساب",
  "contact.hours": "الساعات", "contact.hoursV": "مفتوح 24/24",
  "contact.formTitle": "أرسل لنا رسالة",
  "contact.name": "الاسم", "contact.tel": "الهاتف",
  "contact.message": "الرسالة", "contact.send": "أرسل عبر واتساب",

  "tourism.title": "للمسافرين", "tourism.sub": "اكتشف جنوب المغرب على إيقاعك.",
  "tourism.aitben": "آيت بن حدو", "tourism.aitben.d": "القصر الشهير المصنف باليونسكو، 30 دقيقة من ورزازات.",
  "tourism.desert": "رحلات الصحراء", "tourism.desert.d": "مرزوكة، زاكورة، عرق الشبي.",
  "tourism.marrakech": "مراكش ↔ ورزازات", "tourism.marrakech.d": "رحلة أسطورية عبر ممر تيشكا.",

  "footer.tag": "تأجير سيارات فاخرة في ورزازات، المغرب.",
  "footer.links": "روابط سريعة", "footer.contact": "اتصل",
  "footer.rights": "جميع الحقوق محفوظة.", "footer.made": "صُنع بـ ❤️ في المغرب",

  "booking.startDate": "تاريخ البداية",
  "booking.endDate": "تاريخ العودة",
  "booking.location": "مكان الاستلام",
  "booking.locationPlaceholder": "المطار، الفندق، مكتب EMS...",
};

const dicts: Record<Lang, Dict> = { fr, en, ar };

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("ems_lang")) as Lang | null;
    if (saved && ["fr", "en", "ar"].includes(saved)) setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("ems_lang", l);
  };

  const t = (key: string) => dicts[lang][key] ?? dicts.fr[key] ?? key;
  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  return <Ctx.Provider value={{ lang, setLang, t, dir }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
