import logan from "@/assets/car-logan.jpg";
import accent from "@/assets/car-accent.jpg";
import clio from "@/assets/car-clio.jpg";
import picanto from "@/assets/car-picanto.jpg";
import prado from "@/assets/car-prado.jpg";
import rangerover from "@/assets/car-rangerover.jpg";

export type Car = {
  id: string;
  name: string;
  category: string;
  image: string;
  pricePerDay: number;
  transmission: "Manuelle" | "Automatique";
  fuel: "Essence" | "Diesel";
  seats: number;
  ac: boolean;
  features: string[];
};

export const CARS: Car[] = [
  { id: "logan", name: "Dacia Logan", category: "Économique", image: logan, pricePerDay: 250, transmission: "Manuelle", fuel: "Diesel", seats: 5, ac: true, features: ["Bluetooth", "USB", "Coffre spacieux", "Économique"] },
  { id: "accent", name: "Hyundai Accent", category: "Berline compacte", image: accent, pricePerDay: 280, transmission: "Manuelle", fuel: "Diesel", seats: 5, ac: true, features: ["Bluetooth", "USB", "Régulateur de vitesse"] },
  { id: "clio", name: "Renault Clio", category: "Citadine", image: clio, pricePerDay: 270, transmission: "Manuelle", fuel: "Essence", seats: 5, ac: true, features: ["Bluetooth", "Tactile", "Faible consommation"] },
  { id: "picanto", name: "Kia Picanto", category: "Citadine", image: picanto, pricePerDay: 230, transmission: "Manuelle", fuel: "Essence", seats: 4, ac: true, features: ["Compacte", "Idéale ville", "Économique"] },
  { id: "prado", name: "Toyota Prado", category: "SUV 4x4", image: prado, pricePerDay: 1200, transmission: "Automatique", fuel: "Diesel", seats: 7, ac: true, features: ["4x4", "GPS", "Cuir", "Idéal désert"] },
  { id: "rangerover", name: "Range Rover Sport", category: "SUV Luxe", image: rangerover, pricePerDay: 2500, transmission: "Automatique", fuel: "Diesel", seats: 5, ac: true, features: ["4x4", "Cuir premium", "GPS", "Toit panoramique"] },
];
