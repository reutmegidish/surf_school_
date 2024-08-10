import { Typography, Container, Grid } from '@mui/material'
import { BeginnerSurfLessons, CourseCard } from '../../../components'
import { surfingCoursesData } from '../../../data/surfingCoursesData'
import { StyledImage } from './SurfingCoursesStyles'

const SurfingCourses = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom sx={{ padding: '1.25rem 0' }}>
        SEA SURF SCHOOL
      </Typography>

      <StyledImage component="img" src="./images/surfers.png" alt="Surfing" />

      <Grid container spacing={0.5}>
        {surfingCoursesData.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            description={course.description}
          />
        ))}

        <BeginnerSurfLessons />
      </Grid>
    </Container>
  )
}

export default SurfingCourses
