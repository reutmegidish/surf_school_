import { useEffect, useState } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material'
import { useAuth } from '../../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { StyledBackgroundBox } from '../../../styles/StyledBackgroundBox'
import NotificationSnackbar from '../../../components/SharedComponents/NotificationSnackbar/NotificationSnackbar'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const { login, user, isAdmin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      if (isAdmin) navigate('/admin')
      else navigate('/schedule')
    }
  }, [user, isAdmin, navigate])

  const handleLogin = async () => {
    try {
      await login(email, password)
    } catch (error) {
      console.error('Login failed: ', error)
      setErrorMessage('Login failed. Please check your email and password.')
      setSnackbarOpen(true)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  return (
    <StyledBackgroundBox>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // צבע רקע שקוף
            borderRadius: '8px',
            backdropFilter: 'blur(5px)',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Login
          </Typography>
          <TextField
            required
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="new-email"
          />
          <TextField
            required
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Container>

      <NotificationSnackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message={errorMessage}
        severity="error"
      />
    </StyledBackgroundBox>
  )
}

export default Login

// import { useEffect, useState } from 'react'
// import { TextField, Button, Container, Typography, Box } from '@mui/material'
// import { useAuth } from '../../../context/AuthProvider'
// import { useNavigate } from 'react-router-dom'
// import { StyledBackgroundBox } from '../../../styles/StyledBackgroundBox'

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const { login, user, isAdmin } = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (user) {
//       if (isAdmin) navigate('/admin')
//       else navigate('/schedule')
//     }
//   }, [user, isAdmin, navigate])

//   const handleLogin = async () => {
//     try {
//       await login(email, password)
//     } catch (error) {
//       console.error('Login failed: ', error)
//     }
//   }

//   return (
//     <StyledBackgroundBox>
//       <Container maxWidth="xs">
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: '2rem',
//             backgroundColor: 'rgba(255, 255, 255, 0.4)', // צבע רקע שקוף
//             borderRadius: '8px',
//             backdropFilter: 'blur(5px)',
//           }}
//         >
//           <Typography
//             variant="h4"
//             component="h1"
//             gutterBottom
//             fontWeight="bold"
//           >
//             Login
//           </Typography>
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoComplete="new-email"
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="new-password"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={handleLogin}
//             sx={{ mt: 2 }}
//           >
//             Login
//           </Button>
//         </Box>
//       </Container>
//     </StyledBackgroundBox>
//   )
// }

// export default Login

// import { useEffect, useState } from 'react'
// import { TextField, Button, Container, Box, Typography } from '@mui/material'
// import { useAuth } from '../../context/AuthProvider'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const { login, user, isAdmin } = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (user) {
//       if (isAdmin) navigate('/admin')
//       else navigate('/schedule')
//     }
//   }, [user, isAdmin, navigate])

//   const handleLogin = async () => {
//     try {
//       await login(email, password)
//     } catch (error) {
//       console.error('Login failed: ', error)
//     }
//   }

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         minHeight: '100vh', // משתמשים ב-minHeight כדי לאפשר למיין להתרחב
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden', // להסתיר את התוכן החורג
//       }}
//     >
//       <Box
//         component="img"
//         src="./images/our1.png"
//         alt="Background"
//         sx={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           top: 0,
//           left: 0,
//           zIndex: -1,
//           objectFit: 'cover',
//           // קובעים את התמונה להיות קבועה בעת גלילה
//           backgroundAttachment: 'fixed',
//         }}
//       />
//       <Container maxWidth="xs">
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: '2rem',
//             backgroundColor: 'rgba(255, 255, 255, 0.8)', // צבע רקע שקוף
//             borderRadius: '8px',
//             backdropFilter: 'blur(5px)',
//           }}
//         >
//           <Typography
//             variant="h4"
//             component="h1"
//             gutterBottom
//             fontWeight="bold"
//           >
//             Login
//           </Typography>
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoComplete="new-email"
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="new-password"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={handleLogin}
//             sx={{ mt: 2 }}
//           >
//             Login
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   )
// }

// export default Login

// import { useEffect, useState } from 'react'
// import { TextField, Button, Container, Box, Typography } from '@mui/material'
// import { useAuth } from '../../context/AuthProvider'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const { login, user, isAdmin } = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (user) {
//       if (isAdmin) navigate('/admin')
//       else navigate('/schedule')
//     }
//   }, [user, isAdmin, navigate])

//   const handleLogin = async () => {
//     try {
//       await login(email, password)
//     } catch (error) {
//       console.error('Login failed: ', error)
//     }
//   }

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Container maxWidth="xs">
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',

//             padding: '2rem',
//             width: '100%',
//             height: '100%',
//             borderRadius: '8px',
//             backdropFilter: 'blur(5px)',
//             marginBottom: '2rem',
//           }}
//         >
//           <Typography
//             variant="h4"
//             component="h1"
//             gutterBottom
//             fontWeight="bold"
//           >
//             Login
//           </Typography>
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoComplete="new-email"
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="new-password"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={handleLogin}
//             sx={{ mt: 2 }}
//           >
//             Login
//           </Button>
//         </Box>
//       </Container>
//       <img
//         src="./images/our1.png"
//         alt="Background"
//         style={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           top: 0,
//           left: 0,
//           zIndex: -1,
//           objectFit: 'cover',
//         }}
//       />
//     </Box>
//   )
// }

// export default Login
