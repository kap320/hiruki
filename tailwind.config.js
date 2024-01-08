/** @type {import("tailwindcss").Config} */
export default {
    content: ["./pages/**/*.vue", "./components/**/*.vue", "./layouts/**/*.vue"],
    theme: {
        extend: {
            fontFamily: {
                "outfit": ["Outfit", "sans-serif"],
                "poppins": ["Poppins", "sans-serif"]
            },
            colors: {
                "background": "#121212",
                "sub": "#272727",
                "primary": "#FFFFFF",
                "secondary": "#16A34A",
                "error": "#DC2626"
            },
            screens: {
                "ms": "320px",
                "mm": "375px",
                "ml": "425px",
                "tb": "768px",
                "lp": "1024px",
                "ll": "1440px",
                "4k": "2560px"
            }
        }
    },
    plugins: [],
}