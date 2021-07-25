const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: theme => ({
                'resume': "url('bg.jpg')",
            }),
            keyframes: {
                wiggle: {
                  '0%, 100%': { transform: 'rotate(-20deg)' },
                  '50%': { transform: 'rotate(20deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            }
        },
        colors: {
            ...defaultTheme.colors,
            primary: "#ffffff",
            dark: "#0e0e10",
            darkFont: "rgb(239, 239, 241)",
            sky: colors.sky,
            cyan: colors.cyan,
        },
    },
    variants: {},
    plugins: [],
};
