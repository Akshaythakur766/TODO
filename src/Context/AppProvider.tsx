"use client";
import { useTheme } from "next-themes";
import { useState, createContext, useContext, useEffect } from "react";

type CoreContextType = {
  mode: "light" | "dark";
  setMode: (e: "light" | "dark") => void;
};

export const Context = createContext<CoreContextType | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(()=>{
    const theme = localStorage.getItem("theme")
    console.log({themeInProvide:theme})
    setMode(theme as any  ?? "light")
  },[])

  useEffect(()=>{

  },[])
  return (
    <Context.Provider value={{ mode, setMode }}>{children}</Context.Provider>
  );
};

export function useCoreContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useCoreContext must be used within a CoreContext.Provider"
    );
  }
  return context;
}
export default AppProvider;
