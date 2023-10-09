import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7fad39",
        sec: "#f5f5f5",
        dark: "#252525",
        lightDark: "#1c1c1c",
        lightGray: "#6f6f6f",
      },
      container: {
        center: true,
        padding: {
          xl: "5rem",
        },
      },

      fontSize: {
        md: [
          "0.92rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        mds: [
          "0.85rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        "2xs": [
          "0.59rem",
          {
            lineHeight: "1rem",
          },
        ],
      },
    },
    backgroundImage: {
      "hero-banner": "url('../assets/imgs/banner.webp')",
    },
  },
  plugins: [],
};
export default config;
