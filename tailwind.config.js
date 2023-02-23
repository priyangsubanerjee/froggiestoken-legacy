/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./frames/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primaryBg: "#010417;",
        primaryBg: "#010417;",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        berlin: ["Berlin", "sans-serif"],
      },
      colors: {
        primaryGrey: "#E6E6E6",
        secondaryGrey: "#CCCCCC",
        tertiaryGrey: "#EBEBEB",
      },
    },
  },
  plugins: [],
};
