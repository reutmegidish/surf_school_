import { useEffect, useState } from 'react'
import { Grid, Typography, Card, CardContent, Button } from '@mui/material'
import { useAuth } from '../../context/AuthProvider'
import {
  fetchLessonsForWeek,
  registerForLesson,
  getUserData,
} from '../../services/lessonsUtils'

const UserSchedule = () => {
  const { user: authUser } = useAuth()
  const [lessons, setLessons] = useState([])
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (authUser) {
        const fetchedLessons = await fetchLessonsForWeek(authUser.uid)
        setLessons(fetchedLessons)

        const user = await getUserData(authUser.uid)
        if (user) {
          setUserData(user)
        }
      }
    }

    fetchData()
  }, [authUser])

  const handleRegister = async (lessonId) => {
    try {
      await registerForLesson(authUser.uid, lessonId)
      alert('Successfully registered for the lesson!')
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
                  ? lesson.date.toDate().toLocaleDateString('en-US', {
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
                disabled={userData?.remainingLessons === 0}
                sx={{
                  marginTop: 2,
                  backgroundColor:
                    userData?.remainingLessons === 0 ? '#cccccc' : null,
                  '&:hover': {
                    backgroundColor:
                      userData?.remainingLessons === 0 ? '#cccccc' : null,
                  },
                }}
              >
                {userData?.remainingLessons === 0
                  ? 'No Lessons Available'
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
