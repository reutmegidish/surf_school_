import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  addDoc,
  doc,
  getDoc,
} from 'firebase/firestore'
import { firestore } from '../firebase/firebaseConfig'

export const fetchLessons = async (startOfWeek, endOfWeek) => {
  console.log(startOfWeek, endOfWeek)
  try {
    const lessonsRef = collection(firestore, 'lessons')
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
    console.log(1234)
    const lessonsRef = collection(firestore, 'lessons')
    const docRef = await addDoc(lessonsRef, lessonData)
    console.log('Lesson added with ID: ', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Error adding lesson: ', error)
    throw error
  }
}

export const getUserData = async (userId) => {
  try {
    const userDocRef = doc(firestore, 'users', userId)
    const userDocSnap = await getDoc(userDocRef)

    if (userDocSnap.exists()) {
      return userDocSnap.data()
    } else {
      console.error('User document not found')
      return null
    }
  } catch (error) {
    console.error('Error fetching user data: ', error)
    throw error
  }
}

export const fetchLessonsForWeek = async (userId) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const sevenDaysLater = new Date()
  sevenDaysLater.setDate(today.getDate() + 7)
  sevenDaysLater.setHours(23, 59, 59, 999)

  const lessonsCollection = collection(firestore, 'lessons')
  const q = query(
    lessonsCollection,
    where('date', '>=', today),
    where('date', '<=', sevenDaysLater)
  )

  const querySnapshot = await getDocs(q)
  const lessonsData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return lessonsData
}

export const registerForLesson = async (userId, lessonId) => {
  try {
    const lessonRef = doc(firestore, 'lessons', lessonId)
    await updateDoc(lessonRef, {
      registeredStudents: firestore.FieldValue.arrayUnion(userId),
    })

    const userRef = doc(firestore, 'users', userId)
    await updateDoc(userRef, {
      attendedLessons: FieldValue.arrayUnion(lessonId),
    })

    console.log(
      `Student ${userId} registered successfully for lesson ${lessonId}`
    )
  } catch (error) {
    console.error('Error registering student for lesson: ', error)
    throw error
  }
}

const handleRegister = async (lessonId) => {
  try {
    await registerForLesson(authUser.uid, lessonId)
    await registerStudentForLesson(authUser.uid, lessonId)
    alert('Successfully registered for the lesson!')
  } catch (error) {
    console.error('Error registering for lesson: ', error)
    alert('Failed to register for the lesson.')
  }
}
