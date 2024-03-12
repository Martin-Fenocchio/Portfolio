/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#000428",
        mediumBlue: "#122441",
        background: "#030228",
        darkGreen: "#00a872",
        yellow: "#FFC01E",
        green: "#0FFF9A",
      },
      spacing: {
        content: "650px",
      },
    },
  },
  plugins: [],
};
