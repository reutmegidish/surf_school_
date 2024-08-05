import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50%',
  margin: '40px auto',
  padding: '40px 0',
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  color: 'rgb(82, 82, 82)',
  marginBottom: '20px',
  textAlign: 'center',
}))

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: 'rgb(82, 82, 82)',
  textAlign: 'center',
  marginBottom: '20px',
}))

export const ImageContainer = styled(Box)({
  textAlign: 'center',
})
