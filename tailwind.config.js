/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        "landingBanner": "url('/src/assets/landing-ii.png')",
        // "loginPhoto": "url('/src/assets/Screenshot 2023-11-06 at 4.17.45 PM.png')"
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
      },
      backgroundColor:{
        'black': '#000000'
      }
    },
  },
  plugins: [],
}


