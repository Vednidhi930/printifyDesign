/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',      // Custom small device screen size
        'sm': '640px',      // Override default small screen
        'md': '768px',      // Override default medium screen
        'lg': '1024px',     // Override default large screen
        'xl': '1280px',     // Override default extra-large screen
        '2xl': '1536px',    // Override default 2xl screen
        '3xl': '1920px',    // Custom large desktop screen size
      },
      colors: {
        customgrey: '#353A47', 
        customblack:"#203741",
        customeblack1:"#17262b",
        customwhite:"#c4c7c8",
        // Add your custom color here
        customGreen: {
          light: '#6EE7B7',
          DEFAULT: '#10B981',
          dark: '#047857'
        }
      }
    },
  },
  plugins: [],
}