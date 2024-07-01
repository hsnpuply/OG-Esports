/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ], theme: {
       container: {
      padding: '1rem',
      center: true
    },
    extend: {
            backgroundImage: {
        'hero-section': "url('../src/assets/img/hero_section_banner.webp')",
        'dol':"url('./a.jpg')"
      },
      fontFamily: {
          'titilium':['Titillium  Web','sans-serif']
      },
      colors: {
        'primary_background': '#0f1119',
        'badge_bg': '#0f1119',
        'navbar_bg': '#1b1e24',
        'primary_color2':'#dcbc78'
      },
    },
  },
  plugins: [],
}

