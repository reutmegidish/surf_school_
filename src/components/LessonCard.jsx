import { Card, CardContent, Typography, Button } from '@mui/material'

const LessonCard = ({ lesson, onTakeLesson }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{lesson.day}</Typography>
        <Typography variant="body1">{lesson.date}</Typography>
        <Typography variant="body1">Time: {lesson.time}</Typography>
        <Typography variant="body1">Location: {lesson.location}</Typography>
        <Typography variant="body2">{lesson.description}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onTakeLesson(lesson.id)}
          disabled={lesson.taken}
          sx={{ mt: 2 }}
        >
          {lesson.taken ? 'Taken' : 'Take Lesson'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default LessonCard
