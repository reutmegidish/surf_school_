import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const StyledBackgroundBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '90vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(./images/our1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
    backgroundAttachment: 'fixed',
  },
}))
