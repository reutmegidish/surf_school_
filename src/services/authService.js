import { auth } from '../firebase/firebaseConfig'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  getAuth,
} from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
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
        date: '2024-08-11',
        time: '10:00 AM',
        location: 'Beach A',
        description: 'Surfing basics for beginners',
        taken: false,
      },
      {
        id: '2',
        day: 'Tuesday',
        date: '2024-08-12',
        time: '2:00 PM',
        location: 'Beach B',
        description: 'Advanced surfing techniques',
        taken: false,
      },
      {
        id: '3',
        day: 'Wednesday',
        date: '2024-08-13',
        time: '9:00 AM',
        location: 'Beach C',
        description: 'Surfing competition preparation',
        taken: false,
      },
      {
        id: '4',
        day: 'Thursday',
        date: '2024-08-14',
        time: '4:00 PM',
        location: 'Beach D',
        description: 'Safety and rescue techniques',
        taken: false,
      },
      {
        id: '5',
        day: 'Friday',
        date: '2024-08-15',
        time: '11:00 AM',
        location: 'Beach E',
        description: 'Freestyle surfing tricks',
        taken: false,
      },
    ]

    await setDoc(doc(firestore, 'users', uid), {
      name,
      email,
      remainingLessons: 5,
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

export const getUserData = async (userId) => {
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
