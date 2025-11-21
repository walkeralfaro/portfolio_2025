export const projects = {
  challenges: [
    {
      title: "REST Countries Explorer",
      description:
        "A fully responsive country explorer built with Next.js. It consumes the REST Countries API to display detailed information for every nation. Users can filter by name or region, switch themes, and browse a clean, accessible UI designed for clarity and performance.",
      imageUrl: "/projects/challenges/rest-countries.webp",
      imageSmallUrl: "/projects/challenges/rest-countries_small.webp",
      imageAlt: "Desktop screenshot of the REST Countries Explorer built with Next.js",
      screenshots: [],
      technologies: [
        { id: "next", label: "Next.js", icon: "next.svg" },
        { id: "typescript", label: "TypeScript", icon: "typescript.svg" },
        { id: "zod", label: "Zod", icon: "zod.webp" },
        { id: "shadcn", label: "Shadcn/ui", icon: "shadcn.svg" }
      ],
      demoUrl: "https://countries-app-walker.vercel.app/",
      repoUrl: "https://github.com/walkeralfaro/frontendmentor-countries.git",
    },
    {
      title: "Next.js Weather Dashboard",
      description:
        "A modern weather dashboard powered by the Open-Meteo and Geocoding APIs. It provides real-time conditions, hourly forecasts, and daily summaries with smooth UI interactions. State management is handled with Zustand, ensuring fast and predictable updates.",
      imageUrl: "/projects/challenges/weather.webp",
      imageSmallUrl: "/projects/challenges/weather_small.webp",
      imageAlt: "Desktop screenshot of the Weather Dashboard built with Next.js",
      screenshots: [],
      technologies: [
        { id: "next", label: "Next.js", icon: "next.svg" },
        { id: "typescript", label: "TypeScript", icon: "typescript.svg" },
        { id: "zod", label: "Zod", icon: "zod.webp" },
        { id: "zustand", label: "Zustand", icon: "zustand.svg" },
        { id: "shadcn", label: "Shadcn/ui", icon: "shadcn.svg" }
      ],
      demoUrl: "https://weather-app-walker.vercel.app/",
      repoUrl: "https://github.com/walkeralfaro/frontendmentor-weather-app.git",
    },
    {
      title: "Multi Step Form",
      description:
        "Solution to the Frontend Mentor Multi-step Form challenge, built with Next.js, React, TypeScript, TailwindCSS, and Shadcn using a mobile-first workflow. Features multi-step navigation, validation, responsive layouts, and polished UI states. Learned custom font setup, advanced Shadcn styling, and efficient form handling with React Hook Form.",
      imageUrl: "/projects/challenges/multi-step-form.webp",
      imageSmallUrl: "/projects/challenges/multi-step-form_small.webp",
      imageAlt: "Desktop screenshot of the Multi Step Form App",
      screenshots: [],
      technologies: [
        { id: "next", label: "Next.js", icon: "next.svg" },
        { id: "typescript", label: "TypeScript", icon: "typescript.svg" },
        { id: "zod", label: "Zod", icon: "zod.webp" },
        { id: "shadcn", label: "Shadcn/ui", icon: "shadcn.svg" },
        { id: "tailwind", label: "Tailwind", icon: "tailwind.svg" },
      ],
      demoUrl: "https://multi-step-form-walker.vercel.app/",
      repoUrl: "https://github.com/walkeralfaro/frontendmentor-multi-step-form.git",
    },
    {
      title: "URL shortener",
      description:
        "Solution to the Shortly URL Shortening API challenge, built with Next.js, React, Shadcn, MongoDB, and Mongoose. Includes responsive design, custom backend URL shortening, persistent link storage, clipboard copying, and validation with Zod. Demonstrates full-stack development without relying on external shortening APIs.",
      imageUrl: "/projects/challenges/url-shortener.webp",
      imageSmallUrl: "/projects/challenges/url-shortener_small.webp",
      imageAlt: "Desktop screenshot of the URL shortener",
      screenshots: [],
      technologies: [
        { id: "next", label: "Next.js", icon: "next.svg" },
        { id: "typescript", label: "TypeScript", icon: "typescript.svg" },
        { id: "zod", label: "Zod", icon: "zod.webp" },
        { id: "shadcn", label: "Shadcn/ui", icon: "shadcn.svg" },
        { id: "mongodb", label: "MongoDB", icon: "mongodb.svg" },
        { id: "reacthookform", label: "React Hook Form", icon: "reacthookform.svg" },
      ],
      demoUrl: "https://urlshortener.walkeralfaro.com/",
      repoUrl: "https://github.com/walkeralfaro/url-shortener.git",
    },
    {
      title: "Decryptor",
      description:
        "Project for the Alura Challenge - Text Decoder, built with a mobile-first approach following the Figma design. It encrypts and decrypts text using predefined rules, validates input with regex, supports clipboard copying, and features a fully responsive interface. It applies clean HTML structure, array-based logic, and best practices in JavaScript and CSS.",
      imageUrl: "/projects/challenges/decryptor.webp",
      imageSmallUrl: "/projects/challenges/decryptor_small.webp",
      imageAlt: "Desktop screenshot of the Decryptor",
      screenshots: [],
      technologies: [
        { id: "js", label: "Javascript", icon: "js.svg" },
        { id: "css", label: "CSS", icon: "css.svg" },
        { id: "html", label: "HTML", icon: "html.svg" },
      ],
      demoUrl: "https://walkeralfaro.github.io/alura-challenge-decryptor/",
      repoUrl: "https://github.com/walkeralfaro/alura-challenge-decryptor.git",
    },

  ],
  demos: [

  ],
  games: [
    {
      title: "Tetris Game with JS Vanilla",
      description:
        "A Tetris game built entirely with vanilla JavaScript, inspired by MiduDev’s tutorial. It features a canvas-based game loop, touch controls, and basic audio using the Web Audio API. Includes start, gameplay, and game-over screens, plus a live demo and clean, lightweight implementation without external libraries.",
      imageUrl: "/projects/games/tetris.webp",
      imageSmallUrl: "/projects/games/tetris_small.webp",
      imageAlt: "Desktop screenshot of the Tetris game development by Walker Alfaro",
      screenshots: [],
      technologies: [
        { id: "js", label: "Javascript", icon: "js.svg" },
        { id: "css", label: "CSS", icon: "css.svg" },
        { id: "html", label: "HTML", icon: "html.svg" },
      ],
      demoUrl: "https://tetris.walkeralfaro.com/",
      repoUrl: "https://github.com/walkeralfaro/tetris_game_js.git",
    },

  ]
}
