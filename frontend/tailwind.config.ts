import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium cream + white base
        background: {
          50: '#FFFAF5',
          100: '#FFF5EB',
          200: '#FFECD3',
          300: '#FFE0B5',
          400: '#FFD091',
          500: '#FFC16D',
          600: '#FFA945',
          700: '#FF8E1E',
          800: '#E6750A',
          900: '#C45D00',
        },
        surface: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#EEEEEE',
          400: '#E0E0E0',
          500: '#BDBDBD',
          600: '#9E9E9E',
          700: '#757575',
          800: '#616161',
          900: '#424242',
        },
        // Soft black for text
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          tertiary: '#757575',
          muted: '#9E9E9E',
        },
        // Accent colors (subtle, premium)
        accent: {
          blue: '#2563EB',
          green: '#059669',
          amber: '#D97706',
          red: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '0.375rem',
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.06)',
        'strong': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

export default config
