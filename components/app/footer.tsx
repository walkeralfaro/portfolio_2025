import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6">
      <div className="container mx-auto text-center text-sm font-ramabhadra space-y-1">

        <p className="flex items-center justify-center gap-1">
          Designed & developed with{" "}
          <Heart
            fill="#ec4899"
            className="inline-block w-4 h-4 text-pink-500 animate-pulse"
          />{" "}
          by{" "}
          <a
            href="https://github.com/walkeralfaro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-pink-400 dark:hover:text-pink-500 transition-colors"
          >
            Walker Alfaro
          </a>
        </p>

        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          © {year} — All rights reserved.
        </p>
      </div>
    </footer>
  );
}

