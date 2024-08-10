import { auth } from '../firebase/firebaseConfig'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  getAuth,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { firestore } from '../firebase/firebaseConfig'

export const addUserToDatabase = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    )
    const uid = userCredential.user.uid

    await setDoc(doc(firestore, 'users', uid), {
      name,
      email,
      remainingLessons: 5,
      lessons: initialLessons,
      isAdmin: false,
    })

    alert('User added successfully!')
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
    return null
  }
}
