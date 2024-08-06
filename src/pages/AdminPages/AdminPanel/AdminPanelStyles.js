import { Box, Button, Card, Container, styled } from '@mui/material'

export const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
}))

export const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(4),
  position: 'relative',
  zIndex: 1,
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgb(238, 238, 238)',
  color: 'rgb(82, 82, 82)',
  minWidth: '200px',
  height: 'fit-content',
  border: 'none',
}))

export const StyledCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: 'rgb(238, 238, 238)',
  color: 'rgb(82, 82, 82)',
  height: '100%',
  cursor: 'pointer',
}))

export const BackgroundImageBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}))
