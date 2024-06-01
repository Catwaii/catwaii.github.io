/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts,jsx,js}",
    "./src/routes/**/*.{tsx,ts,jsx,js}",
    "./src/components/**/*.{tsx,ts,jsx,js}",
    "./public/**/*.{tsx,ts,jsx,js}",
  ],
  plugins: [require("tailwind-scrollbar")],
  theme: {
    extend: {
      fontFamily: {
        mint_sans: ["Mint Sans", "sans-serif"],
        next_art: ["Next Art", "sans-serif"],
        wood_dragon: ["Wood Dragon", "script"],
      },
      colors: {
        "ascent-green": "#006401",
      },
      backgroundImage: {
        "img-landing": "url('/images/backgrounds/landscape.gif')",
      },
    },
  }
};
