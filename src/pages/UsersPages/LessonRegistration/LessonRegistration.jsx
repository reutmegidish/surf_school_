import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material'
import { useEffect, useState } from 'react'

const mockLessons = [
  { id: 1, date: '2024-07-08', time: '08:00 AM' },
  { id: 2, date: '2024-07-09', time: '08:00 AM' },
  { id: 3, date: '2024-07-10', time: '08:00 AM' },
  { id: 4, date: '2024-07-11', time: '08:00 AM' },
  { id: 5, date: '2024-07-12', time: '08:00 AM' },
]

const LessonRegistration = ({ user }) => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    setLessons(mockLessons)
  }, [])

  const handleRegisterLesson = async (lessonId, lessonDate) => {
    console.log(
      `User ${user.name} registered for lesson ${lessonId} on ${lessonDate}`
    )
  }

  const remainingLessons = user.remainingLessons || 0

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lesson Registration
      </Typography>
      <Grid container spacing={3}>
        {lessons.map((lesson) => (
          <Grid item xs={12} sm={6} md={4} key={lesson.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">Lesson Date: {lesson.date}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Time: {lesson.time}
                </Typography>
                <Button
                  onClick={() => handleRegisterLesson(lesson.id, lesson.date)}
                  disabled={remainingLessons <= 0}
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '1rem' }}
                >
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default LessonRegistration
