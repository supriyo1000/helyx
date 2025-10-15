// components/ClientProviders.tsx
"use client";

import React from "react";
import DemoProvider from "./providers/DemoProvider";

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return <DemoProvider>{children}</DemoProvider>;
}
