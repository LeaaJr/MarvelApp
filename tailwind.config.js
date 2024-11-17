// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.skew-box': {
          transform: 'skewY(-12deg)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
      });
    },
  ],
}
