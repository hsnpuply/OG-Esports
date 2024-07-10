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
        'bg-top-navbar': ' linear-gradient(270deg,#191e2b 0,#333b54 52.08%,#141822 100%)',
        'hamberger-menu': 'linear-gradient(270deg,#23293b 0,#333b54 52.08%,#23293b 100%)',
        'bg-meshki': 'linear-gradient(#000)',
         // Home News Bg
        'bg-news-1': "url('../src/assets/img/hero_section_banner.webp')",
        'bg-news-2': "url('../src/assets/img/news/2.webp')",
        'bg-news-3': "url('../src/assets/img/news/3.jpg')",
        'bg-news-4': "url('../src/assets/img/news/4.png')",
        'bg-news-5': "url('../src/assets/img/news/5.jpg')",
        'bg-news-6': "url('../src/assets/img/news/6.jpg')",

        
      },
      gridTemplateColumns: {
        'footer-1': 'repeat(1, 1fr)',
        'footer-2': 'repeat(2, 1fr)',
        'footer-3': 'repeat(3, 1fr)',
        'footer-4': 'repeat(4, 1fr)',
      },
      screens: {
        'xs': '400px',
        'xxs':'520px'
      },
      fontFamily: {
          'titilium':['Titillium  Web','sans-serif']
      },
      colors: {
        'primary_background': '#0f1119',
        'badge_bg': '#0f1119',
        'navbar_bg': '#1b1e24',
        'primary_color2': '#dcbc78',
        'footer_color':'#151621'
      },

    },
  },
  plugins: [],
}

