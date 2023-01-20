const plugin = require("tailwindcss/plugin");


const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        my_theme: {
          "primary": "#047857",
          "secondary": "#16a34a",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#ffffff",
          "info": "#e11d48",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      {
        my_dark: {
          "primary": "#047857",
          "secondary": "#16a34a",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#ffffff",
          "info": "#e11d48",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "light",
      "dracula",
    ],
  },
  plugins: [require("daisyui"), Myclass],
}