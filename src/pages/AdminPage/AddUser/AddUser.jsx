import { TextField, Button, Container, Box, Typography } from '@mui/material'
import { addUserToDatabase } from '../../../services/firestoreService'
import { useState } from 'react'

const AddUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAddingUser, setIsAddingUser] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsAddingUser(true)
    try {
      await addUserToDatabase(name, email, password)
      alert('User Added Successfully!')
      setName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.error('Error adding user: ', error)
    } finally {
      setIsAddingUser(false)
    }
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <img
        src="/images/our1.png"
        alt="background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 4,
            borderRadius: 2,
            boxShadow: 1,
            textAlign: 'center',
          }}
        >
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isAddingUser}
            >
              {isAddingUser ? 'Adding...' : 'Sign Up'}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AddUser
