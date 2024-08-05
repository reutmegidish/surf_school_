import {
  createTheme,
  ThemeProvider,
  Typography,
  Container,
  Box,
  Grid,
} from '@mui/material'
import { BeginnerSurfLessons } from '../../../components'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
    h1: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: '36px',
      color: 'rgb(82, 82, 82)',
      paddingTop: '20px',
      '@media (max-width: 960px)': {
        fontSize: 20,
      },
      '@media (max-width: 600px)': {
        fontSize: 18,
      },
    },
    h2: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: '30px',
      color: 'rgb(82, 82, 82)',
      paddingTop: '20px',
      '@media (max-width: 960px)': {
        fontSize: 16,
      },
      '@media (max-width: 600px)': {
        fontSize: 14,
      },
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '22px',
      color: 'rgb(82, 82, 82)',
      '@media (max-width: 960px)': {
        fontSize: 14,
      },
      '@media (max-width: 600px)': {
        fontSize: 14,
      },
    },
  },
})

const SurfingCourses = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          marginTop: '20px',
        }}
      >
        <Typography variant="h1" gutterBottom style={{ padding: '20px 0' }}>
          SEA SURF SCHOOL
        </Typography>

        <Grid container spacing={2}>
          {/* Image */}
          <Grid item xs={12}>
            <Box
              component="img"
              src="./images/surfers.png"
              alt="Surfing"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              BEGINNER COURSE
            </Typography>
            <Typography variant="body1" paragraph>
              Our courses for beginners involve detailed theory sessions every
              day in our classroom to help students understand the complex
              elements involved such as gear selection, reading the tides,
              swells, and of course, safety. After theory, step into the water
              and learn how to read and select the right waves, pop up with
              ease, and paddle into your own waves. If you want to get serious
              about surfing, we recommend taking our 5-day beginner course. This
              course will teach you the basics you will need to become an
              independent surfer in the future. After finishing our 5-day
              course, you will receive a certificate of participation and notes
              with main highlights of the course.
            </Typography>
            <Typography variant="body1" paragraph>
              If you take the 5-day course, we will arrange a videographer to
              take videos of you during surfing so you can see where to improve
              during post-surf analysis. You have the option of hiring a
              photographer yourself for shorter courses. The course follows the
              standard curriculum certified by ISA (International Surfing
              Association) and moderated by members of SISA (Siargao Island
              Surfers Association).
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              INTERMEDIATE COURSE
            </Typography>
            <Typography variant="body1" paragraph>
              We now offer new Intermediate Surf Courses! These are geared
              towards surfers who have already gone through beginners courses
              before and want to exponentially improve their surf skills. Unlike
              beginner surfers, intermediate surfers all have different skill
              sets which they need to improve on. Our intermediate course is
              very personalized, starting with an interview to assess your needs
              and a practical surf session to evaluate your current skills.
            </Typography>
            <Typography variant="body1" paragraph>
              Our goal is to get you surfing faster and enjoying more waves! For
              more information or to book, contact us on WhatsApp +63 997 604
              8493 or email us at hello@haranasurf.com.
            </Typography>
          </Grid>

          <BeginnerSurfLessons />
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default SurfingCourses
