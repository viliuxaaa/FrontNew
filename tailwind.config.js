/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    'node_modules/flowbite-react//*.{js,jsx,ts,tsx}'
  ], //content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      height: {
        header: '560px',
        rate: '400px',
      },
      fontSize: {
        h1: '2.6rem',
      },
      screens: {
        xs: '390px',
        
      },
      colors: {
        main: '#F1C27B',
        subMain: '#FFD89C',
        accent: "#A2CDB0",
        darkAccent:"#85A389",
        text: "#111827",
        textHover: "#6A826D",
        background: "#faecd7",
        accentLower: "#E3F0E7",
        custom: "#433622",
        darkMain: "#A88756"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
