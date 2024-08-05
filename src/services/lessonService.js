import { startOfWeek } from 'date-fns'
import { endOfWeek } from 'date-fns'

const getStartOfWeek = (date) => {
  return startOfWeek(date, { weekStartsOn: 0 })
}

const getEndOfWeek = (date) => {
  return endOfWeek(date, { weekStartsOn: 0 })
}

export const fetchLessons = (date) => {
  const startOfWeek = getStartOfWeek(date)
  const endOfWeek = getEndOfWeek(date)

  return Promise.resolve([
    {
      id: 'lesson1',
      date: '2024-07-08',
      time: '08:00',
      capacity: 10,
      registered: ['user1', 'user2'],
      status: 'Open',
    },
    {
      id: 'lesson2',
      date: '2024-07-09',
      time: '08:00',
      capacity: 10,
      registered: [],
      status: 'Open',
    },
  ])
}

export const updateLesson = (updatedLesson) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 1000)
  })
}
