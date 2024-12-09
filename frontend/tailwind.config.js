// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '72': '18rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),  // Add this plugin for line-clamp
  ],
}