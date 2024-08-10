import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
    h1: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: '2.25rem',
      color: 'rgb(82, 82, 82)',
      paddingTop: '1.25rem',
      '@media (max-width: 960px)': {
        fontSize: '1.25rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.125rem',
      },
    },
    h2: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: '1.875rem',
      color: 'rgb(82, 82, 82)',
      paddingTop: '1.25rem',
      '@media (max-width: 960px)': {
        fontSize: '1rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '0.875rem',
      },
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.375rem',
      color: 'rgb(82, 82, 82)',
      '@media (max-width: 960px)': {
        fontSize: '0.875rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '0.875rem',
      },
    },
  },

  spacing: 8,
})

export default theme
