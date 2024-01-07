export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts", "nuxt-icon", "nuxt-disqus"],
    devtools: { enabled: false },
    tailwindcss: { viewer: false },
    googleFonts: {
        families: {
            Outfit: [400, 500, 600, 700],
            Poppins: [400, 500, 600, 700]
        }
    },
    disqus: {
        shortname: "hiruki"
    },
    app: {
        head: {
            title: "Hiruki - Online Anime Streaming Without Ads",
            meta: [
                {
                    name: "description",
                    content: "Hiruki is a simple yet elegant anime streaming website that offers high quality anime content, accessible on multiple devices without ads for free"
                },
                {
                    name: "keywords",
                    content: "hiruki, hiruki xyz, hiruki anime, hiruki streaming, hiruki anime streaming, hiruki streaming anime, hiruki watch, watch hiruki, streaming hiruki"
                },
                {
                    name: "robots",
                    content: "index, follow"
                },
                {
                    property: "og:title",
                    content: "Hiruki - Online Anime Streaming Without Ads",
                },
                {
                    property: "og:description",
                    content: "Hiruki is a simple yet elegant anime streaming website that offers high quality anime content, accessible on multiple devices without ads for free",
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:image",
                    content: "/apple-touch-icon.png",
                },
                {
                    property: "og:url",
                    content: "https://hiruki.xyz/",
                },
                {
                    property: "og:site:name",
                    content: "Hiruki",
                },
                {
                    property: "og:locale",
                    content: "en_US",
                }
            ],
            link: [
                {
                    rel: "canonical",
                    href: "https://hiruki.xyz/"
                },
                {
                    rel: "shortcut icon",
                    type: "image/x-icon",
                    href: "/favicon.ico"
                }
            ]
        }
    },
    runtimeConfig: {
        API: process.env.API_URL
    }
});