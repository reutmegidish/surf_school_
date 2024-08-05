import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'

const AdminPanel = () => {
  const navigate = useNavigate()

  const handleAllUsersClick = () => {
    navigate('/admin/all-users')
  }

  const handleAddUserClick = () => {
    navigate('/admin/add-user')
  }

  const handleWeeklyLessonsClick = () => {
    navigate('/admin/weekly-lessons')
  }

  return (
    <Container sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: 4,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            height: '40px',
          }}
        />
        <Typography
          variant="h4"
          align="center"
          sx={{ color: 'rgb(82, 82, 82)' }}
        >
          User Management
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgb(238, 238, 238)',
              color: 'rgb(82, 82, 82)',
              minWidth: '200px',
              height: 'fit-content',
              border: 'none',
            }}
            onClick={handleAllUsersClick}
          >
            All Users
          </Button>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                backgroundColor: 'rgb(238, 238, 238)',
                color: 'rgb(82, 82, 82)',
                height: '100%',
                cursor: 'pointer',
              }}
              onClick={handleWeeklyLessonsClick}
            >
              <CardContent>
                <EventAvailableIcon sx={{ fontSize: 40 }} />
                <Typography variant="h6">Weekly Lessons Schedule</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                backgroundColor: 'rgb(238, 238, 238)',
                color: 'rgb(82, 82, 82)',
                height: '100%',
                cursor: 'pointer',
              }}
              onClick={handleAddUserClick}
            >
              <CardContent>
                <PersonAddIcon sx={{ fontSize: 40 }} />
                <Typography variant="h6">Add User</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <img
          src="./images/our1.png"
          alt="Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Container>
  )
}

export default AdminPanel
