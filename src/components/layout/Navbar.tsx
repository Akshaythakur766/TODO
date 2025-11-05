"use client";
import { Button } from "Todo/components/ui/button";
import { Moon, Sun, CheckSquare } from "lucide-react";
import { useTheme } from "Todo/contexts/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  flex flex-col items-center ">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <CheckSquare className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">TodoApp</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button className="cursor-pointer px-3 py-4 rounded-sm" variant={isActive("/") ? "default" : "ghost"} size="sm">
              Home
            </Button>
          </Link>
          <Link href="/tasks">
            <Button
              className="cursor-pointer px-3 py-4 rounded-sm"
              variant={isActive("/tasks") ? "default" : "ghost"}
              size="sm"
            >
              Tasks
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};
