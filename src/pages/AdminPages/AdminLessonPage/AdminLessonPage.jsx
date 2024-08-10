import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import {
  fetchLessons,
  updateLesson,
  addLesson,
} from '../../../services/lessonsUtils'
import { startOfWeek, endOfWeek } from 'date-fns'
import { AddLessonForm, AdminCalendar, LessonList } from '../../../components'
import { Timestamp } from 'firebase/firestore'

const AdminLessonPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    const fetchLessonsData = async () => {
      const startOfWeekDate = startOfWeek(selectedDate)
      const endOfWeekDate = endOfWeek(selectedDate)

      try {
        const data = await fetchLessons(startOfWeekDate, endOfWeekDate)
        setLessons(data)
      } catch (error) {
        console.error('Error fetching lessons: ', error)
      }
    }

    fetchLessonsData()
  }, [selectedDate])

  const handleDateChange = async (date) => {
    setSelectedDate(date)
  }

  const fetchAndSetLessons = async () => {
    const startOfWeekDate = startOfWeek(selectedDate)
    const endOfWeekDate = endOfWeek(selectedDate)

    try {
      const data = await fetchLessons(startOfWeekDate, endOfWeekDate)
      setLessons(data)
    } catch (error) {
      console.error('Error fetching lessons: ', error)
    }
  }

  const handleLessonUpdate = async (id, updatedData) => {
    try {
      await updateLesson(id, updatedData)
      alert('Lesson updated successfully!')
      fetchAndSetLessons()
    } catch (error) {
      console.error('Error updating lesson: ', error)
      alert('Failed to update lesson. Please try again.')
    }
  }

  const handleLessonAdd = async (newLesson) => {
    const update = {
      ...newLesson,
      date: Timestamp.fromDate(new Date(newLesson.date)),
    }

    try {
      await addLesson(update)
      alert('Lesson added successfully!')
      fetchAndSetLessons()
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
      ></Box>

      <Typography variant="h5" component="h1">
        Lessons for the week starting from {selectedDate.toDateString()}
      </Typography>

      <AdminCalendar
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
      <LessonList lessons={lessons} onUpdateLesson={handleLessonUpdate} />

      <AddLessonForm onAddLesson={handleLessonAdd} />
    </Box>
  )
}

export default AdminLessonPage
