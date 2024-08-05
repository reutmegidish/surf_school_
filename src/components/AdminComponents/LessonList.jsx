import React from 'react'
import { List, ListItem, ListItemText, Typography } from '@mui/material'

const LessonList = ({ lessons, onUpdateLesson }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Upcoming Lessons
      </Typography>
      <List>
        {lessons.map((lesson) => (
          <ListItem key={lesson.id}>
            <ListItemText
              primary={`${new Date(lesson.date).toLocaleDateString()} - ${
                lesson.time
              }`}
              secondary={`Capacity: ${lesson.capacity}, Status: ${lesson.status}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default LessonList
