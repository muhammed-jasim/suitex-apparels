/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3E5EAB", // Adjust this based on your Figma design's primary color
          light: "#5A78C3",
          dark: "#2D4A8F",
        },
        secondary: {
          DEFAULT: "#F3F4F6",
          dark: "#E5E7EB",
        },
        accent: {
          DEFAULT: "#FF6B6B", // Adjust this based on your Figma design's accent color
          light: "#FF8A8A",
          dark: "#E54C4C",
        },
        // Add other brand colors from your Figma file
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
