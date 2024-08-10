import { useEffect, useState } from 'react'
import { Grid, Typography, Card, CardContent, Button } from '@mui/material'
import { useAuth } from '../../../context/AuthProvider'
import {
  fetchLessonsForWeek,
  registerForLesson,
  getUserData,
  updateUserLessons,
} from '../../../services/lessonsUtils'

const UserSchedule = () => {
  const { user: authUser } = useAuth()
  const [lessons, setLessons] = useState([])
  const [userData, setUserData] = useState(null)
  const [registeredLessons, setRegisteredLessons] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (authUser) {
        // Fetch lessons for the week
        const fetchedLessons = await fetchLessonsForWeek(authUser.uid)
        setLessons(fetchedLessons)

        // Fetch user data including attended lessons
        const user = await getUserData(authUser.uid)
        if (user) {
          setUserData(user)
          setRegisteredLessons(user.attendedLessons || [])
        }
      }
    }

    fetchData()
  }, [authUser])

  const handleRegister = async (lessonId) => {
    try {
      // Register for the lesson
      await registerForLesson(authUser.uid, lessonId)

      // Update the number of remaining lessons
      const updatedRemainingLessons = userData.remainingLessons - 1
      await updateUserLessons(authUser.uid, updatedRemainingLessons)

      alert('Successfully registered for the lesson!')

      // Update the list of registered lessons and remaining lessons after successful registration
      setRegisteredLessons((prev) => [...prev, lessonId])
      setUserData((prev) => ({
        ...prev,
        remainingLessons: updatedRemainingLessons,
      }))
    } catch (error) {
      console.error('Error registering for lesson: ', error)
      alert('Failed to register for the lesson.')
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Hello {userData?.name}
        </Typography>

        {userData?.remainingLessons === 0 ? (
          <Typography variant="subtitle1" align="center" gutterBottom>
            You have no remaining lessons to use
          </Typography>
        ) : (
          <Typography variant="subtitle1" align="center" gutterBottom>
            You have {userData?.remainingLessons ?? 'unknown'} remaining lessons
          </Typography>
        )}
      </Grid>
      {lessons.map((lesson) => (
        <Grid item xs={12} sm={6} md={4} key={lesson.id}>
          <Card sx={{ height: '100%' }}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h5"
                component="div"
                align="center"
                sx={{ fontWeight: 'bold', marginBottom: 1 }}
              >
                {lesson.description}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                align="center"
                sx={{ marginBottom: 0.5 }}
              >
                Date:{' '}
                {lesson.date
                  ? new Date(lesson.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })
                  : 'Date not available'}
              </Typography>
              <Typography
                color="text.secondary"
                align="center"
                sx={{ marginBottom: 0.5 }}
              >
                Time: {lesson.time}
              </Typography>
              <Typography variant="body2" align="center">
                Location: {lesson.location}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleRegister(lesson.id)}
                disabled={
                  registeredLessons.includes(lesson.id) ||
                  userData?.remainingLessons === 0
                }
                sx={{
                  marginTop: 2,
                  backgroundColor: registeredLessons.includes(lesson.id)
                    ? '#cccccc'
                    : null,
                  '&:hover': {
                    backgroundColor: registeredLessons.includes(lesson.id)
                      ? '#cccccc'
                      : null,
                  },
                }}
              >
                {registeredLessons.includes(lesson.id)
                  ? 'You are registered for this lesson'
                  : 'Register for Lesson'}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default UserSchedule
