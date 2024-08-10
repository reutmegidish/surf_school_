import {
  CommunityCardContainer,
  CommunityCardImage,
} from './CommunityCardStyles'
import { communityData } from '../../../data/communityData'
import { Typography } from '@mui/material'

const CommunityCard = () => {
  return (
    <CommunityCardContainer>
      <Typography variant="h2" sx={{ fontWeight: 600, textAlign: 'center' }}>
        {communityData.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', marginBottom: '20px' }}
      >
        {communityData.description}
      </Typography>
      <CommunityCardImage
        component="img"
        src="./images/community.png"
        alt="Community-pic"
      />
    </CommunityCardContainer>
  )
}

export default CommunityCard
