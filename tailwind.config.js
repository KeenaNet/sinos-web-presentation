/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // navy/dark blue
        secondary: "#f3f4f6", // light gray
        alert: "#f87171", // red/salmon
        warning: "#fbbf24", // amber/orange
        success: "#4ade80", // green
      },
    },
  },
  plugins: [],
}
