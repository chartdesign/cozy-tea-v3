/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cozy-purple": "#61394D",
        "cozy-light-tan": "rgb(254,251,246)",
        "cozy-dark-tan": "rgb(227,208,185)",
      },
    },
  },
  plugins: [],
};
