/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    // center: true
    // },
    extend: {
      colors: {
        "main-blue": "#0573f0",
        "main-white": "white",
        "main-line": "#0769da",
        "main-background": "#f7fbfc",
        "secondery-line": "#f3f4f6"
      },
      backgroundImage: {
        "Logo": "url('./src/assets/electronic-store-logo.svg')",
        "hero": "url('./src/assets/electronic-store-hero-image.jpg')",
        "heroLogo": "url('./src/assets/electronic-store-brand-logo-00.png')",
        "productDisc": "url('./src/assets/product-image-000099.jpg')",
        "support": "url('./src/assets/electronic-store-support-team.png')"
      },
      animation: {
        slideup: 'slideup .5s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
        gradiantLoader: 'gradiantLoader repeat .5s 3 ease-in-out'
      },
      keyframes: {
        gradiantLoader: {
          from: {backgroundImage: "linear-gradient(60deg, transparent, #d5d5d5)" },
          to: {    backgroundImage: "linear-gradient(-60deg, #d5d5d5),, transparent" }
        },
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-15%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
    plugins: [],
  }
}
