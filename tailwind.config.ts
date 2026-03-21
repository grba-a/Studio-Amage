import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#935638',
          light: '#b06840',
          dark: '#7a4529',
        },
        bg: {
          DEFAULT: '#f4ece4',
          dark: '#ede3db',
        },
        'text-primary': '#2c1810',
        'text-muted': '#6b4c3b',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
