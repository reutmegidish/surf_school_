import * as React from 'react'
import AppBar from '@mui/material/AppBar'

import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { pages } from '../../../constants/routesConfig.js'
import LargeScreenMenu from '../LargeScreenMenu/LargeScreenMenu.jsx'
import Logo from '../Logo/Logo.jsx'
import MobileMenu from '../MobileMenu/MobileMenu.jsx'
import MobileMenuButton from '../MobileMenuButton/MobileMenuButton.jsx'
import UserMenu from '../UserMenu/UserMenu.jsx'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: '.3rem',
    textDecoration: 'none',
    h6: {
      color: 'rgb(82, 82, 82)',
    },
  },
  palette: {
    primary: {
      main: 'rgb(82, 82, 82)',
    },
    text: {
      primary: 'rgb(82, 82, 82)',
    },
  },
})

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          boxShadow:
            'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
          borderBottom: '1px solid rgb(82, 82, 82)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo display={{ xs: 'none', md: 'flex' }} />
            <MobileMenuButton
              handleOpenNavMenu={handleOpenNavMenu}
              display={{ xs: 'flex', md: 'none' }}
            />
            <MobileMenu
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
              pages={pages}
            />

            <Logo display={{ xs: 'flex', md: 'none' }} flexGrow={1} />
            <LargeScreenMenu
              pages={pages}
              handleCloseNavMenu={handleCloseNavMenu}
            />
            <UserMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navbar
