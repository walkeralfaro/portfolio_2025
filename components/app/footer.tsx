import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-4">
      <p className="container mx-auto text-center text-xs font-ramabhadra">
        Design and developed with{" "}
        <Heart
          fill="#f472b6"
          width={16}
          className="inline-block"
        />{" "}
        by{" "}
        <a href="https://github.com/walkeralfaro" className="text-blue-600 hover:text-blue-800 dark:text-pink-400 dark:hover:text-pink-500 cursor-pointer">
          Walker Alfaro
        </a>
      </p>
    </footer>
  );
}
