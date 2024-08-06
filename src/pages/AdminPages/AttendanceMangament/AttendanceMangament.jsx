import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Container,
  Typography,
} from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../../../firebase/firebaseConfig'
import { useEffect, useState } from 'react'

const AttendanceManagement = () => {
  const [attendanceData, setAttendanceData] = useState([])

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'attendance'))
        const attendance = []
        querySnapshot.forEach((doc) => {
          attendance.push({ id: doc.id, ...doc.data() })
        })
        setAttendanceData(attendance)
      } catch (error) {
        console.error('Error fetching attendance data:', error)
      }
    }

    fetchAttendanceData()
  }, [])

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Attendance Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Lesson Date</TableCell>
              <TableCell>Lesson Time</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.userName}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.time}</TableCell>
                <TableCell>{record.location}</TableCell>
                <TableCell>{record.description}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default AttendanceManagement
