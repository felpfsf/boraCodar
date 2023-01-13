/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './desafios/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './desafios/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        mytheme: {
          primary: '#97c9ef',
          secondary: '#98e285',
          accent: '#af39d3',
          neutral: '#20232C',
          text: '#CDB3FF',
          base100: '#3F3257',
          info: '#79B6E2',
          success: '#24B77A',
          warning: '#C88F09',
          error: '#EA1A2F'
        }
      }
    }
  },
  plugins: []
}
