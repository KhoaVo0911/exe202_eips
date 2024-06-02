/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "login-background":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('https://i.imgur.com/WErp8xb.jpeg')",
      }),
      colors: {
        "customHoverBg": '#d7f4e2',
        "custom-color": "#1d275f",
        "brandPrimary": "#4CAF4F",
        "neutralDGrey": "#4D4D4D",
        "neutralGrey": "#717171",
        "neutralSilver": "#F5F7FA",
        "gray900": "#18191F",
        "neutralBlack": "#263238",
      },
      fontFamily: {
        "dmsans-medium": ['"DmSans-Medium"', "sans-serif"],
      },
      spacing: {
        "custom-width": "168px",
        "custom-height": "46px",
        "custom-left": "719px",
        "custom-top": "1247px",
        "custom-left-2": "744px",
        "custom-top-2": "1261px",
      },
      borderRadius: {
        "custom-radius": "50px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
