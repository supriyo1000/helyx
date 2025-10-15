'use client'

// DemoProvider.tsx
import { ReactNode, useState } from "react";
import DemoContext from "@/contexts/DemoContext";

export default function DemoProvider({ children }: { children: ReactNode }) {
    const [openDemo, setOpenDemo] = useState(false);

    const toggleDemo = () => {
        setOpenDemo((prev) => !prev);
    };

    return (
        <DemoContext.Provider value={{ openDemo, setOpenDemo, toggleDemo }}>
            {children}
        </DemoContext.Provider>
    );
}