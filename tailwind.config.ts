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
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
