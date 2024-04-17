/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "register.html", "login.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
      },
      colors: {
        primaryBlue: {
          100: "#07689F",
          400: "#2F83B2",
          500: "#07689F",
          600: "#043E5F",
        },
        neutral: {
          100: "#F9F9F9",
          200: "#EFEFEF",
          300: "#D9D9D9",
          400: "#A6A6A6",
          500: "#565656",
        },
        stateColour: {
          errL: "#E5062E",
          errD: "#A80102",
          alert: "#FFCC00",
          accent: "#FF6C01",
          success: "#4C9839",
          successLight: "#E8F5E4",
        },
      },
    },
  },
  plugins: [],
};
