/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-clr-1": "var(--primary-clr-1)",
        "primary-clr-2": "var(--primary-clr-2)",
        "primary-clr-3": "var(--primary-clr-3)",
        "secondary-clr-1": "var(--secondary-clr-1)",
        "secondary-clr-2": "var(--secondary-clr-2)",
        "secondary-clr-3": "var(--secondary-clr-3)"
      },
      gridColumns: "2fr 1fr",
    },
  },
  plugins: [],
}

