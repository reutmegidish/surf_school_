import { Grid } from '@mui/material'
import {
  Container,
  Title,
  Description,
  ImageContainer,
} from './CommunityCardStyles'
import { communityData } from '../../data/communityData'

const CommunityCard = () => {
  return (
    <Container>
      <Title variant="h2">{communityData.title}</Title>
      <Description variant="body1">{communityData.description}</Description>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <ImageContainer>
            <img
              src="./images/community.png"
              alt="Community-pic"
              style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
            />
          </ImageContainer>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CommunityCard
