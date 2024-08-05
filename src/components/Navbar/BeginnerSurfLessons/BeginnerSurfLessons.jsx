import {
  createTheme,
  ThemeProvider,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
    h1: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: '36px',
      color: 'rgb(82, 82, 82)',
      textAlign: 'center',
      marginTop: '20px',
      marginBottom: '20px',
      '@media (max-width: 960px)': {
        fontSize: 24,
      },
      '@media (max-width: 600px)': {
        fontSize: 20,
      },
    },
    h2: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: '30px',
      color: 'rgb(82, 82, 82)',
      textAlign: 'center',
      paddingBottom: '10px',
      '@media (max-width: 960px)': {
        fontSize: 18,
      },
      '@media (max-width: 600px)': {
        fontSize: 16,
      },
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '22px',
      color: 'rgb(82, 82, 82)',
      textAlign: 'center',
      whiteSpace: 'pre-line',
      minHeight: '220px',
      '@media (max-width: 960px)': {
        minHeight: 'auto',
      },
      '@media (max-width: 600px)': {
        minHeight: 'auto',
      },
    },
  },
})

const courseOptions = [
  {
    title: '1-Day Course',
    theoryLessons: '- 1 Theory lesson in the Classroom',
    waterTraining: '- Over 2 Hours per session',
    equipment: '- Equipment (board, leash, rashguard)',
    additionalInfo:
      '- Entrance fees, Transportation by motorbike / tricycle and boat fees are excluded',
  },
  {
    title: '3-Day Course',
    theoryLessons: '- 3 Theory lessons in the Classroom',
    waterTraining: '- 6 hours training in the water',
    equipment: '- Equipment (board, leash, rashguard)',
    additionalInfo:
      '- Entrance fees, Transportation by motorbike / tricycle and boat fees are excluded',
  },
  {
    title: '5-Day Course',
    theoryLessons: '- 3 Theory lessons in the Classroom',
    waterTraining: '- 10 hours training in the water',
    equipment: '- Equipment (board, leash, rashguard)',
    additionalInfo:
      '- Entrance fees, Transportation by motorbike / tricycle and boat fees are excluded',
  },
]

const BeginnerSurfLessons = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h1" gutterBottom>
          BEGINNER SURF LESSONS
        </Typography>
        <Grid container spacing={2}>
          {courseOptions.map((course, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h2" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="body1">
                    {course.theoryLessons}
                    {'\n'}
                    {course.waterTraining}
                    {'\n'}
                    {course.equipment}
                    {'\n'}
                    {course.additionalInfo}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default BeginnerSurfLessons
