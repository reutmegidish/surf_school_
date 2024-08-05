import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Paper,
  TextField,
  Modal,
  Box,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { firestore } from '../../../firebase/firebaseConfig'
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore'
import { getAuth, deleteUser as firebaseDeleteUser } from 'firebase/auth'
import { useEffect, useState } from 'react'

const AllUsers = () => {
  const [users, setUsers] = useState([])
  const [lessonsToAdd, setLessonsToAdd] = useState({})
  const [open, setOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'users'))
        const usersData = []
        querySnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() })
        })
        setUsers(usersData)
        console.log('Users fetched: ', usersData)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  const handleLessonsChange = (userId, value) => {
    setLessonsToAdd((prev) => ({ ...prev, [userId]: value }))
  }

  const handleAddLessons = async (userId) => {
    const lessons = parseInt(lessonsToAdd[userId] || 10, 10)
    const userDocRef = doc(firestore, 'users', userId)

    try {
      const userDoc = await getDoc(userDocRef)
      const currentRemainingLessons = userDoc.data().remainingLessons
      await updateDoc(userDocRef, {
        remainingLessons: currentRemainingLessons + lessons,
      })
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId
            ? { ...user, remainingLessons: currentRemainingLessons + lessons }
            : user
        )
      )
    } catch (error) {
      console.error('Error adding lessons:', error)
    }
  }

  const handleDeleteUser = (userId) => {
    setUserToDelete(userId)
    setOpen(true)
  }

  const confirmDeleteUser = async () => {
    if (!userToDelete) return

    const userDocRef = doc(firestore, 'users', userToDelete)
    const auth = getAuth()

    try {
      const userDoc = await getDoc(userDocRef)
      const userUid = userDoc.data().uid
      await deleteDoc(userDocRef)

      const user = auth.currentUser
      if (user && user.uid === userUid) {
        await firebaseDeleteUser(user)
      }

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userToDelete)
      )
      setOpen(false)
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setUserToDelete(null)
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: grey[200] }}>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Email</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Remaining Lessons</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Add Lessons</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Delete User</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user.id}
                sx={{ backgroundColor: index % 2 === 0 ? 'white' : grey[100] }}
              >
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.remainingLessons}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <TextField
                      type="number"
                      defaultValue={10}
                      onChange={(e) =>
                        handleLessonsChange(user.id, e.target.value)
                      }
                      size="small"
                      sx={{ minWidth: 80, marginRight: 1 }}
                    />
                    <Button
                      variant="outlined"
                      onClick={() => handleAddLessons(user.id)}
                      sx={{ marginLeft: 1 }}
                    >
                      Add
                    </Button>
                  </Box>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Are you sure you want to delete this user?
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            This action cannot be undone.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="outlined" onClick={handleClose}>
              No
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={confirmDeleteUser}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default AllUsers
