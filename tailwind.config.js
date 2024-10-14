/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F5597",
        secondary: "#3964ad",
      },
      backgroundColor: {
        primary: "#2F5597",
        secondary: "#3964ad",
        hover: '#22285C',
      },
    },
  },
  plugins: [],
}

