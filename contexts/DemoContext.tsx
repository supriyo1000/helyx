'use client';
import { createContext } from "react";

const DemoContext = createContext<{
  openDemo: boolean;
  setOpenDemo: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDemo: () => void
} | undefined>(undefined)

export default DemoContext