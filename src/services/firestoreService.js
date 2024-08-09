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
    console.log('here', uid)

    await setDoc(doc(collection(firestore, 'users'), uid), {
      name: name,
      email: email,
      remainingLessons: 0,
      attendedLessons: [],
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
