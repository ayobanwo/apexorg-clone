/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'blueZ': '#2E5BCC',
                'blueX': '#336AEA',
                'orange': '#FFA500',
                'blueGray': '#ADD8E6',
                'darkPurple': '#463c58',
                'cyan': '#00FFFF',
                
                'darkGreen': '#152925',
                'plainGreen': '#2E5BCC',
                'XGreen': '#219452',
                'X2Green': '#626362',
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