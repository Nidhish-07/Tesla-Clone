/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        model3: "url('/src/assets/images/model-3.jpg')",
        modelS: "url('/src/assets/images/model-s.jpg')",
        modelX: "url('/src/assets/images/model-x.jpg')",
        modelY: "url('/src/assets/images/model-y.jpg')",
        accessories: "url('/src/assets/images/accessories.jpg')",
        solarPanels: "url('/src/assets/images/solar-panel.jpg')",
        solarRoof: "url('/src/assets/images/solar-roof.jpg')",
      },
      animation: {
        arrowDownAnimate: "arrowDown infinite 2s",
      },

      keyframes: {
        arrowDown: {
          "0%,20%, 50%,80%,100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(5px)",
          },
          "60%": {
            transform: "translateY(3px)",
          },
        },
      },
    },
  },
  plugins: [],
};
