import { useState, useEffect } from 'react'
import { firestore } from '../firebase/firebase'

const useFirestore = (collection) => {
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    const unsubscribe = firestore
      .collection(collection)
      .onSnapshot((snapshot) => {
        setDocuments(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        )
      })

    return () => unsubscribe()
  }, [collection])

  return documents
}

export default useFirestore
