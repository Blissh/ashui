/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        'olive': "#3E433E",
        'coffee-yellow': "#CBB169",
        'coffee-red': "#EA5B47",
        'cream': '#E9C7A5'
      },
    },
  },
  plugins: [],
};
