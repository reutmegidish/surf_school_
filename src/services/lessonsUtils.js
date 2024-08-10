import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  addDoc,
  doc,
  getDoc,
  arrayUnion,
} from 'firebase/firestore'
import { firestore } from '../firebase/firebaseConfig'
const convertTimestampToDate = (timestamp) => {
  if (timestamp instanceof Object && timestamp.toDate) {
    return timestamp.toDate()
  }
  return new Date(timestamp)
}

export const fetchLessons = async (startOfWeek, endOfWeek) => {
  try {
    const lessonsRef = collection(firestore, 'lessons')
    const q = query(
      lessonsRef,
      where('date', '>=', startOfWeek),
      where('date', '<=', endOfWeek)
    )
    const snapshot = await getDocs(q)
    const lessons = snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        date: data.date.toDate(),
        description: data.description,
        location: data.location,
      }
    })
    return lessons
  } catch (error) {
    console.error('Error fetching lessons: ', error)
    throw error
  }
}

export const updateUserAttendedLessons = async (userId, lessonId) => {
  try {
    const userRef = doc(firestore, 'users', userId)
    await updateDoc(userRef, {
      attendedLessons: arrayUnion(lessonId),
    })
  } catch (error) {
    console.error('Error updating attended lessons: ', error)
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
    const docRef = await addDoc(lessonsRef, lessonData)

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

export const updateUserLessons = async (userId, remainingLessons) => {
  try {
    const userDocRef = doc(firestore, 'users', userId)
    await updateDoc(userDocRef, { remainingLessons })
  } catch (error) {
    console.error('Error updating user lessons: ', error)
    throw new Error('Failed to update user lessons')
  }
}

export const registerForLesson = async (userId, lessonId) => {
  try {
    const lessonRef = doc(firestore, 'lessons', lessonId)
    await updateDoc(lessonRef, {
      registeredStudents: arrayUnion(userId),
    })

    const userRef = doc(firestore, 'users', userId)
    await updateDoc(userRef, {
      attendedLessons: arrayUnion(lessonId),
    })
  } catch (error) {
    console.error('Error registering student for lesson: ', error)
    throw error
  }
}
