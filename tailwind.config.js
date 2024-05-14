/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'darkBlue': '#11141a',
                'darkGreen': '#152925',
                'plainGreen': '#219653',
                'XGreen': '#219452',
                'X2Green': '#626362',
                'greenZ': '#2cb064',
                'offWhite': '#fffffe',
                'blueBlack': '#11141b',
                'colorZ': '#13161d',
                'purpleX': '#1D212C',
            },
            fontFamily: {
              ubuntu: ['"Ubuntu Sans"', ...defaultTheme.fontFamily.sans]
            }
        },
    },
    plugins: [],
}