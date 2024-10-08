import { TextField, Box, Typography } from '@mui/material'
import { useState } from 'react'
import { FormBox, FormContainer, SubmitButton } from './AddUserStyles'
import { StyledBackgroundBox } from '../../../styles/StyledBackgroundBox'
import { NotificationSnackbar } from '../../../components'
import { addUserToDatabase } from '../../../services/firestoreService'

const AddUser = () => {
  // State Management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [isAddingUser, setIsAddingUser] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsAddingUser(true)

    // Validation
    // if (!formData.name || !formData.email || !formData.password) {
    //   setSnackbarMessage('All fields are required!')
    //   setSnackbarSeverity('error')
    //   setOpenSnackbar(true)
    //   setIsAddingUser(false)
    //   return
    // }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSnackbarMessage('Please enter a valid email address!')
      setSnackbarSeverity('error')
      setOpenSnackbar(true)
      setIsAddingUser(false)
      return
    }

    // Add user to database
    try {
      await addUserToDatabase(formData.name, formData.email, formData.password)
      setSnackbarMessage('User Added Successfully!')
      setSnackbarSeverity('success')
      setOpenSnackbar(true)
      setFormData({ name: '', email: '', password: '' })
    } catch (error) {
      // console.error('Error adding user: ', error)
      setSnackbarMessage('Error adding user, Try Again')
      setSnackbarSeverity('error')
      setOpenSnackbar(true)
    } finally {
      setIsAddingUser(false)
    }
  }

  // Handle Snackbar close event
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <StyledBackgroundBox>
      <FormContainer component="main" maxWidth="xs">
        <FormBox>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
            <SubmitButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={isAddingUser}
              sx={{ mt: 3, mb: 2 }}
            >
              {isAddingUser ? 'Adding...' : 'Sign Up'}
            </SubmitButton>
          </Box>
        </FormBox>
      </FormContainer>

      <NotificationSnackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </StyledBackgroundBox>
  )
}

export default AddUser

// // src/pages/AdminPages/AddUser/AddUser.js
// import { TextField, Box, Typography } from '@mui/material'
// import { useState } from 'react'
// import { FormBox, FormContainer, SubmitButton } from './AddUserStyles'
// import { useFormHandlers } from '../../../hooks/useFirestore'
// import { StyledBackgroundBox } from '../../../styles/StyledBackgroundBox'
// import { NotificationSnackbar } from '../../../components'

// const AddUser = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   })

//   const [isAddingUser, setIsAddingUser] = useState(false)
//   const [openSnackbar, setOpenSnackbar] = useState(false)
//   const [snackbarMessage, setSnackbarMessage] = useState('')
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success')

//   const { handleChange, handleSubmit, handleCloseSnackbar } = useFormHandlers(
//     formData,
//     setFormData,
//     setIsAddingUser,
//     setSnackbarMessage,
//     setSnackbarSeverity,
//     setOpenSnackbar
//   )

//   return (
//     <StyledBackgroundBox>
//       <FormContainer component="main" maxWidth="xs">
//         <FormBox>
//           <Typography component="h1" variant="h5">
//             Add User
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Name"
//               name="name"
//               autoComplete="name"
//               autoFocus
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <SubmitButton
//               type="submit"
//               fullWidth
//               variant="contained"
//               disabled={isAddingUser}
//               sx={{ mt: 3, mb: 2 }}
//             >
//               {isAddingUser ? 'Adding...' : 'Sign Up'}
//             </SubmitButton>
//           </Box>
//         </FormBox>
//       </FormContainer>

//       <NotificationSnackbar
//         open={openSnackbar}
//         onClose={handleCloseSnackbar}
//         message={snackbarMessage}
//         severity={snackbarSeverity}
//       />
//     </StyledBackgroundBox>
//   )
// }

// export default AddUser

//
//
//
//
//
//
//

// // src/pages/AdminPages/AddUser/AddUser.js
// import { TextField, Box, Typography } from '@mui/material'
// import { useState } from 'react'
// import { FormBox, FormContainer, SubmitButton } from './AddUserStyles'
// import { useFormHandlers } from '../../../utils/formHandlers'
// import { StyledBackgroundBox } from '../../../styles/StyledBackgroundBox'
// import { NotificationSnackbar } from '../../../components'

// const AddUser = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   })

//   const [isAddingUser, setIsAddingUser] = useState(false)
//   const [openSnackbar, setOpenSnackbar] = useState(false)
//   const [snackbarMessage, setSnackbarMessage] = useState('')
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success')

//   const { handleChange, handleSubmit, handleCloseSnackbar } = useFormHandlers(
//     formData,
//     setFormData,
//     setIsAddingUser,
//     setSnackbarMessage,
//     setSnackbarSeverity,
//     setOpenSnackbar
//   )

//   return (
//     <StyledBackgroundBox>
//       <FormContainer component="main" maxWidth="xs">
//         <FormBox>
//           <Typography component="h1" variant="h5">
//             Add User
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Name"
//               name="name"
//               autoComplete="name"
//               autoFocus
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <SubmitButton
//               type="submit"
//               fullWidth
//               variant="contained"
//               disabled={isAddingUser}
//               sx={{ mt: 3, mb: 2 }}
//             >
//               {isAddingUser ? 'Adding...' : 'Sign Up'}
//             </SubmitButton>
//           </Box>
//         </FormBox>
//       </FormContainer>

//       <NotificationSnackbar
//         open={openSnackbar}
//         onClose={handleCloseSnackbar}
//         message={snackbarMessage}
//         severity={snackbarSeverity}
//       />
//     </StyledBackgroundBox>
//   )
// }

// export default AddUser

// import { TextField, Box, Typography, Snackbar, Alert } from '@mui/material'
// import { useState } from 'react'
// import { FormBox, FormContainer, SubmitButton } from './AddUserStyles'
// import { useFormHandlers } from '../../../hooks/useFirestore'
// import { StyledBackgroundBox } from '../../../styles/StyledBackgroundBox'

// const AddUser = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   })

//   const [isAddingUser, setIsAddingUser] = useState(false)
//   const [openSnackbar, setOpenSnackbar] = useState(false)
//   const [snackbarMessage, setSnackbarMessage] = useState('')
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success')

//   const { handleChange, handleSubmit, handleCloseSnackbar } = useFormHandlers(
//     formData,
//     setFormData,
//     setIsAddingUser,
//     setSnackbarMessage,
//     setSnackbarSeverity,
//     setOpenSnackbar
//   )

//   return (
//     <StyledBackgroundBox>
//       <FormContainer component="main" maxWidth="xs">
//         <FormBox>
//           <Typography component="h1" variant="h5">
//             Add User
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Name"
//               name="name"
//               autoComplete="name"
//               autoFocus
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <SubmitButton
//               type="submit"
//               fullWidth
//               variant="contained"
//               disabled={isAddingUser}
//               sx={{ mt: 3, mb: 2 }}
//             >
//               {isAddingUser ? 'Adding...' : 'Sign Up'}
//             </SubmitButton>
//           </Box>
//         </FormBox>
//       </FormContainer>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         sx={{ zIndex: 10000 }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbarSeverity}
//           sx={{
//             width: '100%',
//             transition: 'transform 0.5s ease',
//             transform:
//               snackbarSeverity === 'success' ? 'scale(1.1)' : 'scale(1)',
//           }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </StyledBackgroundBox>
//   )
// }

// export default AddUser

// // import { TextField, Box, Typography, Snackbar, Alert } from '@mui/material'
// // import { addUserToDatabase } from '../../../services/firestoreService'
// // import { useState } from 'react'
// // import {
// //   BackgroundBox,
// //   BackgroundImage,
// //   FormBox,
// //   FormContainer,
// //   SubmitButton,
// // } from './AddUserStyles'

// // const AddUser = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //   })

// //   const [isAddingUser, setIsAddingUser] = useState(false)
// //   const [openSnackbar, setOpenSnackbar] = useState(false)
// //   const [snackbarMessage, setSnackbarMessage] = useState('')
// //   const [snackbarSeverity, setSnackbarSeverity] = useState('success')

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData((prevData) => ({ ...prevData, [name]: value }))
// //   }

// //   const handleSubmit = async (event) => {
// //     event.preventDefault()
// //     setIsAddingUser(true)

// //     if (!formData.name || !formData.email || !formData.password) {
// //       setSnackbarMessage('All fields are required!')
// //       setSnackbarSeverity('error')
// //       setOpenSnackbar(true)
// //       setIsAddingUser(false)
// //       return
// //     }

// //     if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       setSnackbarMessage('Please enter a valid email address!')
// //       setSnackbarSeverity('error')
// //       setOpenSnackbar(true)
// //       setIsAddingUser(false)
// //       return
// //     }

// //     try {
// //       await addUserToDatabase(formData.name, formData.email, formData.password)
// //       setSnackbarMessage('User Added Successfully!')
// //       setSnackbarSeverity('success')
// //       setOpenSnackbar(true)
// //       setFormData({ name: '', email: '', password: '' })
// //     } catch (error) {
// //       console.error('Error adding user: ', error)
// //       setSnackbarMessage('Error adding user: ' + error.message)
// //       setSnackbarSeverity('error')
// //       setOpenSnackbar(true)
// //     } finally {
// //       setIsAddingUser(false)
// //     }
// //   }

// //   const handleCloseSnackbar = () => {
// //     setOpenSnackbar(false)
// //   }

// //   return (
// //     <BackgroundBox>
// //       <BackgroundImage src="/images/our1.png" alt="background" />
// //       <FormContainer component="main" maxWidth="xs">
// //         <FormBox>
// //           <Typography component="h1" variant="h5">
// //             Add User
// //           </Typography>
// //           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
// //             <TextField
// //               margin="normal"
// //               required
// //               fullWidth
// //               id="name"
// //               label="Name"
// //               name="name"
// //               autoComplete="name"
// //               autoFocus
// //               value={formData.name}
// //               onChange={handleChange}
// //             />
// //             <TextField
// //               margin="normal"
// //               required
// //               fullWidth
// //               id="email"
// //               label="Email"
// //               name="email"
// //               autoComplete="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //             />
// //             <TextField
// //               margin="normal"
// //               required
// //               fullWidth
// //               name="password"
// //               label="Password"
// //               type="password"
// //               id="password"
// //               autoComplete="current-password"
// //               value={formData.password}
// //               onChange={handleChange}
// //             />
// //             <SubmitButton
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               disabled={isAddingUser}
// //               sx={{ mt: 3, mb: 2 }}
// //             >
// //               {isAddingUser ? 'Adding...' : 'Sign Up'}
// //             </SubmitButton>
// //           </Box>
// //         </FormBox>
// //       </FormContainer>

// //       <Snackbar
// //         open={openSnackbar}
// //         autoHideDuration={6000}
// //         onClose={handleCloseSnackbar}
// //         sx={{ zIndex: 10000 }}
// //       >
// //         <Alert
// //           onClose={handleCloseSnackbar}
// //           severity={snackbarSeverity}
// //           sx={{
// //             width: '100%',
// //             transition: 'transform 0.5s ease',
// //             transform:
// //               snackbarSeverity === 'success' ? 'scale(1.1)' : 'scale(1)',
// //           }}
// //         >
// //           {snackbarMessage}
// //         </Alert>
// //       </Snackbar>
// //     </BackgroundBox>
// //   )
// // }

// // export default AddUser
