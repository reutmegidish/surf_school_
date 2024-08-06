import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

import {
  fetchLessons,
  updateLesson,
  addLesson,
} from '../../../services/lessonsUtils'
import { startOfWeek, endOfWeek } from 'date-fns'
import { AddLessonForm, AdminCalendar, LessonList } from '../../../components'

const AdminLessonPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [lessons, setLessons] = useState([])

  const fetchAndSetLessons = async (date) => {
    const startOfWeekDate = startOfWeek(date)
    const endOfWeekDate = endOfWeek(date)

    const data = await fetchLessons(startOfWeekDate, endOfWeekDate)
    setLessons(data)
    console.log(data)

    useEffect(() => {
      fetchAndSetLessons(selectedDate)
    }, [selectedDate])

    const handleDateChange = async (date) => {
      console.log('date', date)
      setSelectedDate(date)
      await fetchAndSetLessons(date)
    }

    const handleLessonUpdate = async (id, updatedData) => {
      try {
        await updateLesson(id, updatedData)
        alert('Lesson updated successfully!')
        fetchAndSetLessons(selectedDate)
      } catch (error) {
        console.error('Error updating lesson: ', error)
        alert('Failed to update lesson. Please try again.')
      }
    }

    const handleLessonAdd = async (newLesson) => {
      const update = {
        ...newLesson,
        date: new Date(newLesson.date).getTime(),
      }

      try {
        await addLesson(update)
        alert('Lesson added successfully!')
        fetchAndSetLessons(selectedDate)
      } catch (error) {
        console.error('Error adding lesson: ', error)
        alert('Failed to add lesson. Please try again.')
      }
    }

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          padding: 3,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: 3,
          }}
        >
          <Typography variant="h5" component="h1">
            Lessons for the week starting from {selectedDate.toDateString()}
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h5">
            Select a date to display lessons
          </Typography>
          <AdminCalendar
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </Box>
        <LessonList lessons={lessons} onUpdateLesson={handleLessonUpdate} />
        <AddLessonForm onAddLesson={handleLessonAdd} />
      </Box>
    )
  }
}

export default AdminLessonPage
