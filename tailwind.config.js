/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softCyan: "#69EACB",
        lightViolet: "#EACCF8",
        // lightViolet: "#fdf3fd",
        softBlue: "#6654F1",
        strongViolet: "#8611ce",
        lightGray: "#F4F7FF",
        grayishViolet: "#fdf3fd",
        grey: "#F8F8F8",
        blackie: "#2E2E2E",
        gray: "#676767",
        cardColor: "rgb(238, 238, 238, 1)",
        primary: "#3056D3",
        green: "#13C296",
        teamColor: "#EEEEEE ",
        formColorBg: " #F4F7FF",
        limeGreen: "#09bf49",
      },
      borderRadius: {
        "4xl": "12rem",
      },
      fontSize: {
        large: ["42px", "55px"],
      },
      dropShadow: {
        "3xl": "0 4px 4px rgba(0,0,0,.25)",
      },
      backgroundImage: {
        teamBackg: "url('/eclipse.svg')",
      },
    },
  },
  plugins: [],
};
