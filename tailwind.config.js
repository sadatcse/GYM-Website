/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#f4cb71',
        'custom-black': '#131313',
        primary: {
          DEFAULT: '#333',
          100: '#484848',
          200: '#151515',
          300: '#111',
        },
        accent: '#d4000d',
      },
      fontFamily: {
        oswald: 'var(--font-oswald)',
        roboto: 'var(--font-roboto)',
      },
    },
  },
  plugins: [require("daisyui")],
};
