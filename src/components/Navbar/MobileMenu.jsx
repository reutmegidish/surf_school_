import React from 'react'
import Menu from '@mui/material/Menu'
import NavMenuItems from './NavMenuItems'
import { pages } from '../../constants/routesConfig'

const MobileMenu = ({ anchorElNav, handleCloseNavMenu }) => (
  <Menu
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
    sx={{
      display: { xs: 'block', md: 'none' },
    }}
  >
    <NavMenuItems handleClosMenu={handleCloseNavMenu} items={pages} />
  </Menu>
)

export default MobileMenu
