export const theme = {
  colors: {
    bgDark: '#222222',
    bgFooter: '#222222',
    white: '#FEFEFE',
    orange: '#E85D04',
    orangeHover: '#FF6B0A',
    textGray: '#626970',
    textLight: 'rgba(254, 254, 254, 0.7)',
    border: 'rgba(254, 254, 254, 0.2)',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  container: {
    maxWidth: '1440px',
    contentWidth: '1048px',
    sidePadding: '196px',
  },
} as const;

export type Theme = typeof theme;
