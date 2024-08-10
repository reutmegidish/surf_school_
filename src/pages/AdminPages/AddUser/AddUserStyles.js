import { Button, Container, Box } from '@mui/material'
import { styled } from '@mui/system'

// export const BackgroundBox = styled(Box)({
//   position: 'relative',
//   width: '100vw',
//   height: '100vh',
//   overflow: 'hidden',
// })

// export const BackgroundImage = styled('img')({
//   position: 'absolute',
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   zIndex: -1,
// })

export const FormContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
}))

export const FormBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,

  textAlign: 'center',
}))

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}))
