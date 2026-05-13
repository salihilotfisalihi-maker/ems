import { createContext, useContext, useState, type ReactNode } from "react";
import type { Car } from "./cars";
import { VehicleModal } from "@/components/site/VehicleModal";

type BookingContextType = {
  openBooking: (car?: Car | null, step?: "details" | "form") => void;
};

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [activeCar, setActiveCar] = useState<Car | null>(null);
  const [step, setStep] = useState<"details" | "form">("details");
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = (car: Car | null = null, initialStep: "details" | "form" = "form") => {
    setActiveCar(car);
    setStep(initialStep);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setActiveCar(null);
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <VehicleModal 
        isOpen={isOpen}
        car={activeCar} 
        onClose={closeBooking} 
        initialStep={step} 
      />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
