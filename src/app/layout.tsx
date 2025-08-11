import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "Todo/components/layout/Navbar";
import { Footer } from "Todo/components/layout/Footer";
import { ThemeProvider } from "Todo/contexts/ThemeContext";
import { TooltipProvider } from "Todo/components/ui/tooltip";
// import { Toaster } from "Todo/components/ui/toaster";
import { Toaster as Sonner } from "Todo/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App — Manage Your Tasks Effortlessly",
  description:
    "A modern Next.js app to create, organize, and track your daily tasks with ease.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TooltipProvider>
            {/* <Toaster /> */}
            <Sonner />
            <Navbar />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
