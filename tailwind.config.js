/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DE4C4A',
        'light-primary': '#472525',
        dark: '#1E1E1E',
        'light-dark': '#262626',
        'dark-font': '#d6d3d1',
        'amber-hover-effect': '#ffa2000f',
      },
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '1.25rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        base: [
          '14px',
          {
            lineHeight: '1.5rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
      },
    },
  },
  plugins: [],
};
