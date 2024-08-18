/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        loveYa: ['"Love Ya Like A Sister"', "cursive"],
      },
      colors: {
        primary: {
          100: "#1dbb90",
          200: "#1eaace",
          300: "#ffb20e",
        },
      },
    },
  },
  plugins: [],
};
