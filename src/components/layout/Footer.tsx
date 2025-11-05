import {
  CheckSquare,
  Github,
  Twitter,
  Heart,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t bg-background w-full flex flex-col items-center">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <CheckSquare className="h-5 w-5 text-primary" />
              <span className="font-semibold">TodoApp</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A beautiful and efficient task management application built with
              modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Local Storage</li>
              <li>Dark Mode</li>
              <li>Priority Levels</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Home</li>
              <li>Tasks</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex space-x-2">
              <Link href={"https://github.com/Akshaythakur766"} target="_blank">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link href={"https://www.instagram.com/akshay_thakur_03/"} target="_blank">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link href={"https://www.linkedin.com/in/akshay-thakur1766/"} target="_blank">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 TodoApp. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next
            & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
