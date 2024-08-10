import { useState, useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { fetchLessons } from '../../../services/lessonsUtils'

const AdminCalendar = ({ selectedDate, onDateChange }) => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    const fetchLessonsForWeek = async () => {
      try {
        const startOfWeekDate = new Date(selectedDate)
        startOfWeekDate.setDate(selectedDate.getDate() - selectedDate.getDay())
        const endOfWeekDate = new Date(startOfWeekDate)
        endOfWeekDate.setDate(startOfWeekDate.getDate() + 6)

        const fetchedLessons = await fetchLessons(
          startOfWeekDate,
          endOfWeekDate
        )
        setLessons(fetchedLessons)
      } catch (error) {
        console.error('Error fetching lessons: ', error)
      }
    }

    fetchLessonsForWeek()
  }, [selectedDate])

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Select a date to display lessons:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <DatePicker
            selected={selectedDate}
            onChange={(date) => onDateChange(date)}
            dateFormat="dd/MM/yyyy"
            className="datepicker"
            style={{ width: '100%', maxWidth: 300 }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default AdminCalendar
