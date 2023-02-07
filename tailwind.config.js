/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url(assets/images/aafabanner1.jpg)",
        "value-prep": "url(assets/images/valueimage.jpg)",
      },
      colors: {
        "accent-black": "#232323",
      },
      backgroundPosition: {
        "custom-90": "90%",
        "custom-100": "100% 0",
      },
    },
  },
  plugins: [require("daisyui")],
};
