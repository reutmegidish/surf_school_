import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  createTheme,
  ThemeProvider,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
  },
})

const instructorsData = [
  {
    name: 'David',
    description:
      "David competed in the national surfing championship and finished second. He spends most of his time at sea and loves teaching surfing techniques he's learned over the years.",
    image: './images/david.jpg',
  },
  {
    name: 'Ben',
    description:
      'Ben started surfing at a young age and has spent most of his days at sea. He loves surfing and guiding others, and he is one of our senior instructors.',
    image: './images/ben.jpg',
  },
  {
    name: 'Emily',
    description:
      'Emily is a passionate surfer who has traveled to many surfing destinations around the world. She enjoys sharing her knowledge and experience with our community.',
    image: './images/emily.jpg',
  },
  {
    name: 'Michael',
    description:
      'Michael is known for his technical surfing skills and has won several regional surfing competitions. He loves the ocean and enjoys teaching others to surf.',
    image: './images/michael.jpg',
  },
]

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
      <Typography variant="h3" sx={{ marginBottom: '10px' }}>
        {name}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  </Card>
)

const OurInstructors = () => (
  <ThemeProvider theme={theme}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="75%"
      margin="40px auto"
      padding="40px 0"
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '24px',
          fontWeight: 600,
          color: 'rgb(82, 82, 82)',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Our Instructors
        <FavoriteIcon
          sx={{
            fontSize: '24px',
            color: 'rgb(82, 82, 82)',
            marginLeft: '10px',
            verticalAlign: 'middle',
          }}
        />
      </Typography>
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
    </Box>
  </ThemeProvider>
)

export default OurInstructors
