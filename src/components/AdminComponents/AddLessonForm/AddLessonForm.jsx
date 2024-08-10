import { useState } from 'react'

const AddLessonForm = ({ onAddLesson }) => {
  const [lessonData, setLessonData] = useState({
    date: '',
    time: '09:00',
    location: 'Palma Beach',
    description: 'Beginners surf lesson',
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
      description: 'Beginners surf lesson',
      location: 'Palma Beach',
      time: '09:00',
      registeredStudents: [],
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
      <button type="submit">Add Lesson</button>
    </form>
  )
}

export default AddLessonForm
