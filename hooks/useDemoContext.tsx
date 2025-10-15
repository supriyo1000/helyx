'use client';
import DemoContext from "@/contexts/DemoContext";
import { useContext } from "react";

export default function useDemoContext() {
    const context = useContext(DemoContext)
    if (!context) {
        throw new Error("useDemoContext must be used within a DemoProvider");
    }
    return context;
}