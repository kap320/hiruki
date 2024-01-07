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
            }
        },
    },
    plugins: [],
}