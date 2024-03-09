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
        green: "#0FFF9A",
      },
    },
  },
  plugins: [],
};
