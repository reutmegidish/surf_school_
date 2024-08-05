import { getUserData, updateUserData } from '../../services/firestoreService'
import { useAuth } from '../../context/AuthProvider'
import { Box, Typography, Grid, Container } from '@mui/material'
import { collection, addDoc } from 'firebase/firestore'
import { firestore } from '../../firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { LessonCard } from '../../components'

const backgroundImageUrl = './images/beach.png'

const UserSchedule = () => {
  const [lessons, setLessons] = useState([])
  const [remainingLessons, setRemainingLessons] = useState(0)
  const { user: authUser } = useAuth()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const fetchUserData = async () => {
      if (authUser) {
        const userData = await getUserData(authUser.uid)
        console.log('User Data:', userData)
        setLessons(userData.lessons || [])
        setRemainingLessons(userData.remainingLessons || 0)
        setUserName(userData.name || authUser.displayName || authUser.email)
      }
    }

    fetchUserData()
  }, [authUser])

  const handleTakeLesson = async (lessonId) => {
    if (remainingLessons > 0) {
      const updatedLessons = lessons.map((lesson) =>
        lesson.id === lessonId ? { ...lesson, taken: true } : lesson
      )
      setLessons(updatedLessons)
      setRemainingLessons((prev) => prev - 1)

      await updateUserData(authUser.uid, {
        lessons: updatedLessons,
        remainingLessons: remainingLessons - 1,
      })

      const selectedLesson = lessons.find((lesson) => lesson.id === lessonId)
      await addDoc(collection(firestore, 'attendance'), {
        userId: authUser.uid,
        userName: authUser.displayName || authUser.email,
        ...selectedLesson,
        attended: false,
      })
    } else {
      alert('No remaining lessons available.')
    }
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ padding: '50px 0' }}
        >
          Lesson Schedule
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          {`${userName}'s Lessons`}
        </Typography>
        {lessons.length === 0 ? (
          <Typography variant="body1">No lessons available.</Typography>
        ) : (
          <Grid container spacing={4}>
            {lessons.map((lesson) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={lesson.id}>
                <LessonCard lesson={lesson} onTakeLesson={handleTakeLesson} />
              </Grid>
            ))}
          </Grid>
        )}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>
          Remaining Lessons: {remainingLessons}
        </Typography>
      </Container>
    </Box>
  )
}

export default UserSchedule
