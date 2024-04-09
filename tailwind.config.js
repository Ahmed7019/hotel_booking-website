/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
      },
      colors: {
        primaryBlue: {
          100: "#07689F",
        },
      },
    },
  },
  plugins: [],
};
