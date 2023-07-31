/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./client/src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        red: '#ff0000',
        white: '#FFFFFF',
        background_color: '#0d1117',
        background_color_alt: '#212121',
        darkmode: {
          text: {
            imp2: '#c1c1c1',
            imp2_hover: '#969696',
          }
        },
      },
      boxShadow: {
        nav_shadow: '0px 3px 1px 100px hsla(0,0%,0%,1)'
      },
      backgroundImage: {
        hero: "url('/blender-cropped.jpg')"
      }
    },
  },
  variants: {},
  plugins: [],
});

