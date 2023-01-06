/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        helloblogtheme: {
          primary: "rgb(127, 201, 221)",

          secondary: "#0ea5e9",

          accent: "#1f2937",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        Merriweather: ["Merriweather"],
      },
    },
  },
  plugins: [require("daisyui")],
};
