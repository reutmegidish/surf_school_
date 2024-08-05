import { useState, useEffect } from 'react'
import { Grid, Typography, Paper } from '@mui/material'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { fetchLessons } from '../../services/lessonsUtils'

const AdminCalendar = ({ selectedDate, onDateChange }) => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    const fetchLessonsForWeek = async () => {
      try {
        const startOfWeekDate = new Date(selectedDate)
        startOfWeekDate.setDate(selectedDate.getDate() - selectedDate.getDay())
        const endOfWeekDate = new Date(startOfWeekDate)
        endOfWeekDate.setDate(startOfWeekDate.getDate() + 4)

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
      component={Paper}
      elevation={3}
      sx={{ padding: 3 }}
    >
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Admin Calendar
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => onDateChange(date)}
          dateFormat="dd/MM/yyyy"
          className="datepicker"
        />
      </Grid>
    </Grid>
  )
}

export default AdminCalendar
