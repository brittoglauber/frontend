/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['url("./public/fonts/Poppins-Regular.ttf")'],
              },
        }
    },
    plugins: []
}
