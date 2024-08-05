import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Card,
  CardContent,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

const instructorsData = [
  {
    name: 'David',
    description:
      "David competed in the national surfing championship and finished second. He spends most of his time at sea and loves teaching surfing techniques he's learned over the years.",
    image: './images/david.png',
  },
  {
    name: 'Ben',
    description:
      'Ben started surfing at a young age and has spent most of his days at sea. He loves surfing and guiding others, and he is one of our senior instructors.',
    image: './images/ben.png',
  },
  {
    name: 'Emily',
    description:
      'Emily is a passionate surfer who has traveled to many surfing destinations around the world. She enjoys sharing her knowledge and experience with our community.',
    image: './images/emily.png',
  },
  {
    name: 'Michael',
    description:
      'Michael is known for his technical surfing skills and has won several regional surfing competitions. He loves the ocean and enjoys teaching others to surf.',
    image: './images/michael.png',
  },
]

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
  },
})

const InstructorCard = ({ name, description, image }) => (
  <Card
    sx={{
      maxWidth: 300,
      borderRadius: 12,
      margin: '20px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': { transform: 'scale(1.05)' },
    }}
  >
    <CardMedia
      component="img"
      image={image}
      alt={`Instructor ${name}`}
      sx={{ height: 200, borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
    />
    <CardContent sx={{ padding: '16px' }}>
      <Typography variant="h5" sx={{ marginBottom: '10px' }}>
        {name}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  </Card>
)

const OurInstructors = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ThemeProvider theme={theme}>
      <Box
        position="relative"
        width="100vw"
        height="100vh"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="./images/our.png"
          alt="Instructors Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          position="absolute"
          textAlign="center"
          padding="20px"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            maxWidth: isSmallScreen ? '80%' : '600px',
            minWidth: '250px',
            margin: '0 20px',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          }}
        >
          <Typography
            variant={isSmallScreen ? 'h4' : 'h2'}
            sx={{ fontSize: isSmallScreen ? '18px' : '24px', fontWeight: 600 }}
          >
            Our Instructors
            <FavoriteIcon
              sx={{
                fontSize: isSmallScreen ? '18px' : '24px',
                color: 'rgb(82, 82, 82)',
                marginLeft: '10px',
                verticalAlign: 'middle',
              }}
            />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: isSmallScreen ? '14px' : '16px',
              fontWeight: 400,
              color: 'rgb(82, 82, 82)',
            }}
          >
            Our team of instructors consists of talented individuals who have
            surfed in various places around the world and have even competed and
            won surfing competitions. We are so passionate about the ocean,
            waves, and our community that we want to expand it. If you love the
            sea, extreme sports, and want to be part of our community, now is
            the time to join us.
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        margin="40px auto"
        padding="40px 0"
      >
        <Grid container justifyContent="center" spacing={2}>
          {instructorsData.map((instructor, index) => (
            <Grid item key={index}>
              <InstructorCard
                name={instructor.name}
                description={instructor.description}
                image={instructor.image}
              />
            </Grid>
          ))}
        </Grid>
        <Box height="40px" />
      </Box>
    </ThemeProvider>
  )
}

export default OurInstructors
