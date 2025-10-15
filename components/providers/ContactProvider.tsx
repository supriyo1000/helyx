'use client'

// ContactProvider.tsx
import { ReactNode, useState } from "react";
import ContactContext from "@/contexts/ContactContext";

export default function ContactProvider({ children }: { children: ReactNode }) {
    const [openContact, setOpenContact] = useState(false);

    const toggleContact = () => {
        setOpenContact((prev) => !prev);
    };

    return (
        <ContactContext.Provider value={{ openContact, setOpenContact, toggleContact }}>
            {children}
        </ContactContext.Provider>
    );
}