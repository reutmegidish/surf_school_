import { useState } from 'react'

const AddLessonForm = ({ onAddLesson }) => {
  const [lessonData, setLessonData] = useState({
    date: '',
    time: '',
    capacity: '',
    // status: 'Open',
    isOpen: true,
    location: '',
    description: '',
    registeredStudents: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setLessonData({ ...lessonData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddLesson(lessonData)
    setLessonData({
      date: '',
      time: '',
      capacity: 0,
      description: 'Beginners surf lesson',
      location: 'PPAIA BEACH',
      registeredStudents: [],
      isOpen: true,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={lessonData.date}
        onChange={handleChange}
      />
      <input
        type="time"
        name="time"
        value={lessonData.time}
        onChange={handleChange}
      />
      <input
        type="number"
        name="capacity"
        value={lessonData.capacity}
        onChange={handleChange}
      />
      <button type="submit">Add Lesson</button>
    </form>
  )
}

export default AddLessonForm
