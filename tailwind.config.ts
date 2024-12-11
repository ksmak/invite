import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#53d8fb",
        secondary: "#e6fafe",
        gold: "#FBBC05",
      },
      backgroundImage: {
        'default-category': "url('/media/default.png')"
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
        tangerine: ['var(--font-tangerine)'],
        monserrat: ['var(--font-monserrat)'],
        lobster: ['var(--font-lobster)'],
        great_vibes: ['"Great Vibes"', 'cursive'],
        mark_script: ['"Marck Script"', 'cursive'],
        daneehand: ['var(--font-daneehand)'],
        vollda: ['var(--font-vollda)'],
        moniqa: ['var(--font-moniqa)'],
        stengazeta: ['var(--font-stengazeta'],
        gawaa: ['var(--font-gawaa'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
