/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url(assets/images/aafabanner.jpg)",
      },
      backgroundPosition: {
        "custom-90": "90%",
        "custom-100": "100% 0",
      },
    },
  },
  plugins: [require("daisyui")],
};
