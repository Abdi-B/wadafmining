/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    //
    // "./pages/**/*.{ts,tsx}",
    // "./public/**/*.html",
    //
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        128: "32rem",
        129: "70vh",
        130: "95vh",
      },
      width: {
        128: "32rem",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      background: "#F5F5F5",
      dark: "#000",
      backgroundDefault: "#121212",
      foregroundDefault: "#1E1F1F",
      shadowDefault: "rgba(0,0,0,0.6)",
      eternity: {
        50: "#fcf6f4",
        100: "#f9ece7",
        200: "#f5dcd3",
        300: "#edc4b4",
        400: "#e0a189",
        500: "#d18062",
        600: "#bc6646",
        700: "#9d5438",
        800: "#834731",
        900: "#261610",
      },
      gray: {
        50: "#f4f6fb",
        100: "#f9fafb",
        200: "#ebedeb",
        300: "#d7d9d7",
        400: "#698cc7",
        500: "#466eb1",
        600: "#345595",
        700: "#2b4479",
        800: "#273c65",
        900: "#111827",
      },
      violet: {
        50: "#f8f3ff",
        100: "#f1e9fe",
        200: "#e6d6fe",
        300: "#d1b5fd",
        400: "#b68bfa",
        500: "#985cf6",
        600: "#803aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
      },
      blue: {
        50: "#eff3ff",
        100: "#dbe4fe",
        200: "#bfcffe",
        300: "#93aefd",
        400: "#6088fa",
        500: "#3b6bf6",
        600: "#2558eb",
        700: "#1d4dd8",
        800: "#1e44af",
        900: "#1e3a8a",
      },
      brown: {
        50: "#fefce8",
        100: "#fffac2",
        200: "#fff088",
        300: "#ffe145",
        400: "#fdcd12",
        500: "#f2b705",
        600: "#cd8a01",
        700: "#a36105",
        800: "#874c0c",
        900: "#723e11",
      },
    },
    // slate: {
    //   50: "#eef8ff",
    //   100: "#e0f1ff",
    //   200: "#c7e4fe",
    //   300: "#a5d1fc",
    //   400: "#81b4f8",
    //   500: "#6395f1",
    //   600: "#4672e5",
    //   700: "#385eca",
    //   800: "#304fa3",
    //   900: "#0f172a",
    // },
    // ".transition-slide": {
    //   transition: "all 1s ease-in-out",
    // },
  },
  plugins: [],
};
