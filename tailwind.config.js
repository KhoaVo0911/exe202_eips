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
    },
  },
  plugins: [],
};
