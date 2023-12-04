/** @type {import('tailwindcss').Config} */
export default {
  presets: [require("./src/lib/preset")],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
