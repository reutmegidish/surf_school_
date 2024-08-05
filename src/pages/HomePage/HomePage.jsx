import { Box } from '@mui/material'
import SurfingCourses from '../UsersPages/SurfingCourses/SurfingCourses'
import CommunityInfoComponent from '../../components/CommunityInfoComponent'

const HomePage = () => {
  return (
    <>
      <Box
        component="img"
        src="./images/5.png"
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
      <CommunityInfoComponent />
      <SurfingCourses />
    </>
  )
}

export default HomePage
