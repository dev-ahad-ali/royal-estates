const withMT = require('@material-tailwind/react/utils/withMT');
/** @type {import('tailwindcss').Config} */
export default withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'great': '"Great Vibes", cursive',
                'playfair': '"Playfair Display", serif',
                'noto': '"Noto Sans", sans-serif',
            },
        },
    },
    plugins: [],
});
