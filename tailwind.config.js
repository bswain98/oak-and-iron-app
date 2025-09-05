/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#273BE2", gray: "#ADADAD" }
      },
      fontFamily: {
        heading: ["Cinzel Decorative", "serif"],
        body: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        ui: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        alt: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}
