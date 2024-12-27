/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sedgwick: ["Sedgwick Ave Display", "sans-serif"],
                marvel: ["Marvel", "sans-serif"],
            },
        },
    },
    plugins: [],
};
