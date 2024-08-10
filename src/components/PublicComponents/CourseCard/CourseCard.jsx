import { Typography, Grid } from '@mui/material'

const CourseCard = ({ title, description }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
    </Grid>
  )
}

export default CourseCard
