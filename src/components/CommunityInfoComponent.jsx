import { Box, Typography, Grid } from '@mui/material'

const CommunityInfoComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="50%"
      margin="40px auto"
      padding="40px 0"
    >
      <Typography
        variant="h2"
        style={{
          fontSize: '24px',
          fontWeight: 600,
          color: 'rgb(82, 82, 82)',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Come Ride the Wave with Us!
      </Typography>
      <Typography
        variant="body1"
        style={{
          fontSize: '16px',
          fontWeight: 400,
          color: 'rgb(82, 82, 82)',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Join our vibrant surfing community where camaraderie meets excellence
        under the sun. We're passionate about surfing, socializing, and enjoying
        the sea breeze.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <img
              src="./images/community.png"
              alt="Community"
              style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CommunityInfoComponent
