/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "login-background":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('https://i.imgur.com/WErp8xb.jpeg')",
        // 'user-background':
        //   "linear-gradient(rgba(0,0,0, 0), rgba(0,0,0, 0)), url('https://vshare.amazingtech.vn/static/media/bg-body.85ea3fd6814234db8af1.jpg')",
      }),
      colors: {
        "custom-color": "#1d275f",
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
  plugins: [],
};
