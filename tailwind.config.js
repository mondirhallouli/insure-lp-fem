/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'karlaFont': ["Karla", 'sans-serif'],
                'dmFont': ["DM Serif Display", 'serif'],
            },
            colors: {
                'darkViolet': 'hsl(256, 26%, 20%)',
                'grayishBlue': 'hsl(216, 30%, 68%)',
                'veryDarkViolet': 'hsl(270, 9%, 17%)',
                'darkGrayishViolet': 'hsl(273, 4%, 51%)',
                'veryLightGray': 'hsl(0, 0%, 98%)'
            },
            backgroundImage: {
                'bg-pattern-intro-left-mobile': "url('/images/assets/bg-pattern-intro-left-mobile.svg')",
                'gradient-how-we-work': "linear-gradient(to top right, hsl(270, 9%, 17%), hsl(256, 26%, 20%))",
            },
        },
    },
    plugins: [],
}

