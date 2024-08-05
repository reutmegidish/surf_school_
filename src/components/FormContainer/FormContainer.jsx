import { Container, Box, Typography } from '@mui/material'

const FormContainer = ({ title, children }) => {
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
            {title}
          </Typography>
          {children}
        </Box>
      </Container>
      <img
        src="./images/beach.png"
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

export default FormContainer
