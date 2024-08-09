import { Box } from '@mui/material'
import SurfingCourses from '../UsersPages/SurfingCourses/SurfingCourses'
import { CommunityCard } from '../../components'

const HomePage = () => {
  return (
    <>
      <Box
        component="img"
        src="./images/home-page.png"
        alt="Surfing"
        sx={{
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          objectFit: 'contain',
        }}
      ></Box>
      <Box
        sx={{
          width: '100%',
        }}
      />
      <CommunityCard />
      <SurfingCourses />
    </>
  )
}

export default HomePage
