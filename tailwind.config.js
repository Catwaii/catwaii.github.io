/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts,jsx,js}",
    "./src/routes/**/*.{tsx,ts,jsx,js}",
    "./src/components/**/*.{tsx,ts,jsx,js}",
    "./public/**/*.{tsx,ts,jsx,js}",
  ],
  theme: {
    fontFamily: {
      mint_sans: ["Mint Sans", "sans-serif"],
      next_art: ["Next Art", "sans-serif"],
      wood_dragon: ["Wood Dragon", "script"]
    },
    extend: {
      backgroundImage: {
        "img-landing": "url('/images/backgrounds/landscape.gif')",
      },
    },
  },
  plugins: [],
};
