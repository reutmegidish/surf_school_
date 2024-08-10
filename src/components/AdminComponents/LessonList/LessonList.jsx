import { List, ListItem, Box, Typography } from '@mui/material'

const LessonList = ({ lessons, onUpdateLesson }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Upcoming Lessons:
      </Typography>
      {lessons.length === 0 ? (
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: 'text.secondary' }}
        >
          No lessons scheduled for this week.
        </Typography>
      ) : (
        <List
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {lessons.map((lesson) => (
            <ListItem
              key={lesson.id}
              sx={{ mb: 2, p: 2, borderRadius: 1, boxShadow: 1 }}
            >
              <Box sx={{ width: '100%' }}>
                <Typography variant="subtitle1">Date:</Typography>
                <Typography variant="body1">
                  {new Date(lesson.date).toLocaleDateString()} - {lesson.time}
                </Typography>

                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Description:
                </Typography>
                <Typography variant="body1">{lesson.description}</Typography>

                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Location:
                </Typography>
                <Typography variant="body1">{lesson.location}</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}

export default LessonList
