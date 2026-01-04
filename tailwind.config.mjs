/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                body: ['"Lora"', 'serif'],
                sans: ['"Lora"', 'serif'], // Defaulting sans to serif for this classical theme logic if needed, or keeping standard sans
            },
            colors: {
                primary: '#1a1a1a',
                background: '#ffffff',
            }
        },
    },
    plugins: [],
}
