import ContactContext from "@/contexts/ContactContext";
import { useContext } from "react";

export default function useContactContext() {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error("useContactContext must be used within a ContactProvider");
  }
  return context;
}