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
                "extra": "#454545",
                "primary": "#F7FFF6",
                "secondary": "#0A8754"
            }
        },
    },
    plugins: [],
}