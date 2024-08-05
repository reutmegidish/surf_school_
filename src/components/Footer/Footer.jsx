import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#f8f8f8',
        py: 2,
        mt: 4,
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000' }}>
        © {new Date().getFullYear()} Sea Surf School
      </Typography>
    </Box>
  )
}

export default Footer
