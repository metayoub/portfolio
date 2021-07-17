const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        extend: {
            backgroundImage: theme => ({
                'resume': "url('bg.jpg')",
            })
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
