module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "product-grid": "repeat(auto-fill, minmax(360px, 1fr))",
        "product-grid-mobile":
          "grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
