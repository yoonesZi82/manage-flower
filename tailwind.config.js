import tailwindMotion from "tailwindcss-motion";
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteText: "#404517",
        darkBrown: "#DDE3AB",
        lightBrown: "#DDE3AB",
        textBrown: "#DDE3AB",
        sidebarTheme: "#DDE3AB",
        navbarDashboard: "#404517",
        contentDashboard: "#404517",
        secondary: "#404517",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      mobile: "640px",
      tablet: "768px",
      laptop: "1024px",
      xl: "1200px",
      desktop: "1280px",
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui"), tailwindMotion],
};
