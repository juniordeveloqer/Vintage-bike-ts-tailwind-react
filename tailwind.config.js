/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/VintageBGLOGO.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
        finishlineup: "url('./assets/finishlineup.png')",
        finishlinedown: "url('./assets/finishlinedown.png')",
      },
    },
    screens: {
      xxs: "100px",
      xs: "358px",
      sm: "767px",
      md: "992px",
      xl: "1440px",
      xxl: "1920px",
    },

    before: {
      "content-finishlineup::before": {
        content: "url('./assets/finishlineup.png')",
        width: "50px",
        height: "auto",
      },
    },
  },
  plugins: [],
};
