/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        loveYa: ['"Love Ya Like A Sister"', "cursive"],
        noto: ["Noto Sans Bengali"],
      },
      colors: {
        primary: {
          100: "#1dbb90",
          200: "#1eaace",
          300: "#ffb20e",
        },
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
