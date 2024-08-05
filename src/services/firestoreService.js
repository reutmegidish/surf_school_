import { auth } from '../firebase/firebaseConfig'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  getAuth,
} from 'firebase/auth'
import { doc, getDoc, setDoc, collection, updateDoc } from 'firebase/firestore'
import { firestore } from '../firebase/firebaseConfig'

export const addUserToDatabase = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    )
    const uid = userCredential.user.uid

    const initialLessons = [
      {
        id: '1',
        day: 'Monday',
        date: '2024-07-08',
        time: '10:00 AM',
        location: 'Beach A',
        description: 'Surfing basics for beginners',
        taken: false,
      },
      {
        id: '2',
        day: 'Tuesday',
        date: '2024-07-09',
        time: '09:00 AM',
        location: 'Beach B',
        description: 'Advanced surfing techniques',
        taken: false,
      },
      {
        id: '3',
        day: 'Wednesday',
        date: '2024-07-10',
        time: '9:00 AM',
        location: 'Beach C',
        description: 'Surfing competition preparation',
        taken: false,
      },
      {
        id: '4',
        day: 'Thursday',
        date: '2024-07-11',
        time: '10:00 AM',
        location: 'Beach D',
        description: 'Safety and rescue techniques',
        taken: false,
      },
      {
        id: '5',
        day: 'Friday',
        date: '2024-07-12',
        time: '11:00 AM',
        location: 'Beach E',
        description: 'Freestyle surfing tricks',
        taken: false,
      },
    ]

    await setDoc(doc(collection(firestore, 'users'), uid), {
      name: name,
      email: email,
      remainingLessons: 10,
      lessons: initialLessons,
      isAdmin: false,
    })

    alert('User added successfully!')
    console.log('User added successfully!')
  } catch (error) {
    console.error('Error adding user: ', error)
    throw error
  }
}

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user
  } catch (error) {
    console.error('Error signing in: ', error)
    throw error
  }
}

export const signOut = async () => {
  try {
    await firebaseSignOut(auth)
  } catch (error) {
    console.error('Error signing out: ', error)
    throw error
  }
}

export async function getUserData(userId) {
  const userRef = doc(firestore, 'users', userId)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    return userSnap.data()
  } else {
    console.log('No such document!')
    return null
  }
}

export const updateUserData = async (userId, data) => {
  const userRef = doc(firestore, 'users', userId)
  try {
    await updateDoc(userRef, data)
  } catch (error) {
    console.error('Error updating user data: ', error)
    throw error
  }
}
