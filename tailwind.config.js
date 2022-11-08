/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#e3e3e8",
          300: "#363843",
          400: "#646981",
          600: "#4d5163",
          500: "#7C8096",
        },
        blue: {
          100: "#66A9FF",
          500: "#66A9FF",
          700: "#0D71F0",
          900: "#0950A9",
        },
      },
    },
  },
  plugins: [],
};
