export const WHATSAPP_NUMBER = "212642695556";
export const WHATSAPP_DISPLAY = "+212 6 42 69 55 56";

export function buildBookingMessage(carName: string, details?: { startDate: string; endDate: string; location: string; name: string; phone: string }) {
  if (!details) {
    return `Bonjour EMS Location de Voiture,
Je souhaite réserver cette voiture :

🚗 Voiture: ${carName}
📅 Date de début: 
📅 Date de retour: 
📍 Lieu de prise en charge: 
👤 Nom: 
📞 Téléphone: 

Merci.`;
  }

  return `Bonjour EMS Location de Voiture,
Je souhaite réserver cette voiture :

🚗 Voiture: ${carName}
📅 Date de début: ${details.startDate}
📅 Date de retour: ${details.endDate}
📍 Lieu de prise en charge: ${details.location}
👤 Nom: ${details.name}
📞 Téléphone: ${details.phone}

Merci.`;
}

export function buildContactMessage(name: string, phone: string, message: string) {
  return `Bonjour EMS Location de Voiture,
Je souhaite vous contacter :

👤 Nom: ${name}
📞 Téléphone: ${phone}
📝 Message: ${message}

Merci.`;
}

export function whatsappLink(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  if (typeof window !== "undefined") {
    const link = document.createElement("a");
    link.href = whatsappLink(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }
}
