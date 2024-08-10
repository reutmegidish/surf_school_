import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'

export const CommunityCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50%',
  margin: '0px auto',
  padding: '40px 0',
}))

export const CommunityCardImage = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  maxWidth: '300px',
})
