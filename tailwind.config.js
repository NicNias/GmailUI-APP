/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FDFCFB",

        gray: {
          900: "#202123",
          800: "#2A2B2D",
          700: "#323336",
          600: "#444547",
          400: "#9AA0A6",
        },
        orange: {
          800: "#5E4D4E",
          500: "#F28B81",
          300: "#F6AEA9",
        },
        yellow: {
          600: "#F5B400",
        },
        blue: {
          600: "#4285F4",
        },
      },
      fontFamily: {
        heading: "Roboto_700Bold",
        subtitle: "Roboto_500Medium",
        body: "Roboto_400Regular",
      },
    },
  },
  plugins: [],
};
