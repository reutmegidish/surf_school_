import { Box, CardContent, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import {
  BackgroundImageBox,
  CenteredBox,
  StyledButton,
  StyledCard,
  StyledContainer,
} from './AdminPanelStyles'

const AdminPanel = () => {
  const navigate = useNavigate()

  const handleAllUsersClick = () => {
    navigate('/admin/all-users')
  }

  const cardItems = [
    {
      icon: <EventAvailableIcon sx={{ fontSize: 40 }} />,
      label: 'Weekly Lessons Schedule',
      onClick: () => navigate('/admin/weekly-lessons'),
    },
    {
      icon: <PersonAddIcon sx={{ fontSize: 40 }} />,
      label: 'Add User',
      onClick: () => navigate('/admin/add-user'),
    },
  ]

  return (
    <StyledContainer>
      <CenteredBox>
        <Box sx={{ height: '40px' }} />
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
          <StyledButton onClick={handleAllUsersClick}>All Users</StyledButton>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {cardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard onClick={item.onClick}>
                <CardContent>
                  {item.icon}
                  <Typography variant="h6">{item.label}</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </CenteredBox>

      <BackgroundImageBox>
        <img src="./images/our1.png" alt="Background" />
      </BackgroundImageBox>
    </StyledContainer>
  )
}

export default AdminPanel
