"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import AppProvider from "Todo/Context/AppProvider";
import Footer from "Todo/Components/Footer";
import Navbar from "Todo/Components/Navbar";
import { ThemeProvider } from "Todo/theme/theme-provider";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <AppProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Toaster position="top-center" />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </AppProvider>
  );
}
