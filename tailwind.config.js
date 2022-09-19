module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            nunito: ['Nunito'],
            rale: ['Raleway Dots'],
        },
        opacity: {
            '0': '0',
            '10': '.1',
            '20': '.2',
            '30': '.3',
            '40': '.4',
            '50': '.5',
            '60': '.6',
            '70': '.7',
            '80': '.8',
            '90': '.9',
            '100': '1',
          },
        extend: {         
            screens: {
                '2xl': '1600px',
              },
              spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
              },
              maxWidth: theme => {
                return {
                  'screen-2xl': theme('screens.2xl'),
                }
              },   
            colors: {
                primary: '#d5322e',
                primarylight: '#42a6d7',
                secondary: '#3F2B66',
                danger: '#ff5f40',
                light: '#330000'
          }
        },
      },
      variants: {
        opacity: ['responsive', 'hover', 'focus'],
      },
    plugins: [],
  }