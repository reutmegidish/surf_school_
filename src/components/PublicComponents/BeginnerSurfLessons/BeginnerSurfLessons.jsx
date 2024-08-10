import { Typography, Container, Grid } from '@mui/material'
import { courseOptions } from '../../../data/courseOptions'
import SurfLessonCard from '../SurfLessonCard/SurfLessonCard'

const BeginnerSurfLessons = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom align="center">
        BEGINNER SURF LESSONS
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {courseOptions.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.title}>
            <SurfLessonCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default BeginnerSurfLessons
