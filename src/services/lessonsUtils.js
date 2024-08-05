import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  addDoc,
  doc,
} from 'firebase/firestore'
import { firestore } from '../firebase/firebaseConfig'

const getStartOfWeek = (date) => {
  return getStartOfWeek(date, { weekStartsOn: 0 })
}

const getEndOfWeek = (date) => {
  return getEndOfWeek(date, { weekStartsOn: 0 })
}

export const fetchLessons = async (startOfWeek, endOfWeek) => {
  try {
    const lessonsRef = collection(firestore, 'lessons')
    console.log('ge', startOfWeek.getTime())

    const q = query(
      lessonsRef,
      where('date', '>=', startOfWeek.getTime()),
      where('date', '<=', endOfWeek.getTime())
    )
    const snapshot = await getDocs(q)

    const lessons = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return lessons
  } catch (error) {
    console.error('Error fetching lessons: ', error)
    throw error
  }
}

export const updateLesson = async (id, updatedData) => {
  try {
    const lessonRef = doc(firestore, 'lessons', id)
    await updateDoc(lessonRef, updatedData)
  } catch (error) {
    console.error('Error updating lesson: ', error)
    throw error
  }
}

export const addLesson = async (lessonData) => {
  try {
    const lessonsRef = collection(firestore, 'lessons')
    await addDoc(lessonsRef, lessonData)
  } catch (error) {
    console.error('Error adding lesson: ', error)
    throw error
  }
}
