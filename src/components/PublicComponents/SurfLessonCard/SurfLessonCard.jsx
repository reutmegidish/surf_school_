import { Card, CardContent, Typography } from '@mui/material'

const SurfLessonCard = ({ course }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h2" gutterBottom align="center" fontWeight="bold">
          {course.title}
        </Typography>
        <Typography variant="body1" align="center">
          {course.theoryLessons}
          {course.waterTraining}
          {course.equipment}
          {course.additionalInfo}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SurfLessonCard
