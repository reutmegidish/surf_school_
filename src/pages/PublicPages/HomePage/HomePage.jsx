import { CommunityCard } from '../../../components'
import SurfingCourses from '../SurfingCourses/SurfingCourses'
import { HomePageImage } from './HomePageStyles'

const HomePage = () => {
  return (
    <>
      <HomePageImage
        component="img"
        src="./images/home-page.png"
        alt="Surfing"
      />
      <CommunityCard />
      <SurfingCourses />
    </>
  )
}

export default HomePage
