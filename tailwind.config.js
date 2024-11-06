/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B2434",
        secondary: "#F5F5F5",
        primary2: "#5035FF",
        hold: "#59E391",
      },
      spacing: {
        box: "550px",
      },
      fontFamily: {
        karla: ["Itim", `cursive`],
      },
    },
  },
  plugins: [],
};
