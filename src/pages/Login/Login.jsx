import { useEffect, useState } from 'react'
import { TextField, Button, Container, Box, Typography } from '@mui/material'
import { useAuth } from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    }
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            padding: '2rem',
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            backdropFilter: 'blur(5px)',
            marginBottom: '2rem',
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
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="new-email"
          />
          <TextField
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
      <img
        src="./images/our1.png"
        alt="Background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: -1,
          objectFit: 'cover',
        }}
      />
    </Box>
  )
}

export default Login
