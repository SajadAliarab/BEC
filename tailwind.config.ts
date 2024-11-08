import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        main: {
          50: '#e7ebed',
          100: '#cfd7dc',
          200: '#a0afb9',
          300: '#708795',
          400: '#415f72',
          500: '#144254',  
          600: '#103543',
          700: '#0c2832',
          800: '#081a22',
          900: '#040d11',
          950: '#020709',
        },
        green: {
          50: '#eef7f1',
          100: '#dcefe3',
          200: '#b9dfc7',
          300: '#97cfab',
          400: '#74bf8f',
          500: '#57B674',  
          600: '#46925d',
          700: '#346d46',
          800: '#23492f',
          900: '#112417',
          950: '#091209',
        },
        yellow: {
          50: '#fdf8ef',
          100: '#fbf1df',
          200: '#f7e3bf',
          300: '#f3d59f',
          400: '#f0c78f',
          500: '#EDC179',  
          600: '#be9a61',
          700: '#8e7449',
          800: '#5f4d30',
          900: '#2f2718',
          950: '#18140c',
        },
        red: {
          50: '#f9ecea',
          100: '#f2d9d5',
          200: '#e5b3ab',
          300: '#d98e81',
          400: '#cc6857',
          500: '#C8533E',  
          600: '#a04232',
          700: '#783225',
          800: '#502119',
          900: '#28110c',
          950: '#140806',
        },
      }
    }
  }
}