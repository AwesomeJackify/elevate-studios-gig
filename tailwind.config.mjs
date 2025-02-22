/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        blacky: ["Blacky", ...defaultTheme.fontFamily.sans],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        cmyk: {
          ...require("daisyui/src/theming/themes")["cmyk"],
          primary: "#2E1A47",
          "primary-content": "#ffffff",
          secondary: "#000000",
          "secondary-content": "#ffffff",
          accent: "#2A2A2A",
          "accent-content": "#ffffff",
        },
      },
      // {
      //   cmyk: {
      //     ...require("daisyui/src/theming/themes")["cmyk"],
      //     primary: "#5E17EB",
      //     "primary-content": "#ffffff",
      //     secondary: "#000000",
      //     "secondary-content": "#ffffff",
      //     accent: "#F58F29",
      //   },
      // },
    ],
  },
  plugins: [daisyui],
};
