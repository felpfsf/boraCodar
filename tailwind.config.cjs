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
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        homemade: ['Homemade Apple', 'cursive']
      },
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
        },
        calculator: {
          mainbg: '#'
        }
      },
      backgroundImage: {
        buttonGrad:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)',
        buttonGradPressed:
          'linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%)',
        buttonGradViolet:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%)',
        buttonGradVioletPressed:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0.01%, rgba(0, 0, 0, 0.05) 100%)',
        buttonGradEqual:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
        buttonGradEqualPressed:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.15) 100%)'
      },
      boxShadow: {
        customBoxShadow:
          '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);',
        customPurpleBoxShadow:
          '0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1);'
      }
    }
  },
  plugins: []
}
