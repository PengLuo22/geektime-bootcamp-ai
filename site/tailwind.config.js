/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#1d1d1f',
        accent: {
          DEFAULT: '#0071e3',
          purple: '#bf5af2',
          pink: '#ff2d55',
          orange: '#ff9500',
        },
        bg: {
          primary: '#ffffff',
          secondary: '#f5f5f7',
          tertiary: '#fbfbfd',
        },
        text: {
          primary: '#1d1d1f',
          secondary: '#86868b',
          tertiary: '#6e6e73',
        },
        success: '#34c759',
        warning: '#ff9500',
        error: '#ff3b30',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Helvetica Neue',
          'sans-serif',
        ],
        mono: ['SF Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        112: '28rem',
        128: '32rem',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '18px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.06)',
        md: '0 4px 12px rgba(0, 0, 0, 0.08)',
        lg: '0 12px 32px rgba(0, 0, 0, 0.12)',
        xl: '0 24px 48px rgba(0, 0, 0, 0.16)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1d1d1f',
            '--tw-prose-headings': '#1d1d1f',
            '--tw-prose-links': '#0071e3',
            '--tw-prose-bold': '#1d1d1f',
            '--tw-prose-code': '#0071e3',
            '--tw-prose-quotes': '#86868b',
            maxWidth: 'none',
            a: {
              color: '#0071e3',
              '&:hover': {
                color: '#bf5af2',
              },
            },
            code: {
              color: '#0071e3',
              backgroundColor: '#f5f5f7',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#f5f5f7',
              border: '1px solid #e5e5e5',
            },
            h1: {
              color: '#1d1d1f',
              fontWeight: '700',
            },
            h2: {
              color: '#1d1d1f',
              fontWeight: '700',
              borderBottom: '2px solid #0071e3',
              paddingBottom: '0.5rem',
            },
            h3: {
              color: '#1d1d1f',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: '#0071e3',
              color: '#86868b',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
