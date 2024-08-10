import { createTheme, ThemeProvider } from '@mui/material/styles'
import { TextField, Typography } from '@mui/material'
import DatePicker from 'react-datepicker'

const Calendar = ({ selectedDate, onDateChange }) => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Arial, sans-serif',
      h6: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          subtitle1: {
            fontSize: '1rem',
            fontStyle: 'italic',
            color: '#555',
          },
        },
      },
    },
  })

  const handleDateChange = (date) => {
    onDateChange(date)
  }

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
      >
        <Typography variant="h6">Select Date:</Typography>
        <DatePicker
          label="Choose Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
          style={{ marginRight: '20px' }}
        />
      </div>
    </ThemeProvider>
  )
}

export default Calendar
