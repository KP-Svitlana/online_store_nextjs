/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {

            colors: {
                primary_main: "#508750",
                primary_background: "#FFFDFA",
                secondary_dark: "#326732",
                secondary_Background: "#F8F2E8",
                btn_yellow: "#F9B145",
                text: "#121412",
                Gray_80: "#3E4C59",
                Gray_60: "#616E7C",
                Gray_40: "#9AA5B1",
                Gray_30: "#CBD2D9",
                Gray_20: "#E4E7EE",
                Gray_10: "#F5F7FA",
                Gray_0: "#FFFFFF",
                error: "#DA2121",
                info: "#7E42FE",
                warning: "#FFCC00",
                success: "#34C759",
            },

            container: {
                center: true,
            },

            screens: {
                mobile: "390px",
                tablet: "768px",
                laptop: "1024px",
                desktop: "1440px",
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),    ]
}