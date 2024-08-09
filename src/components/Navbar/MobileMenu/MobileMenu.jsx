import Menu from '@mui/material/Menu'
import { pages } from '../../../constants/routesConfig'
import NavMenuItems from '../NavMenuItems/NavMenuItems'

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
    {[
      <NavMenuItems
        key="nav-items"
        handleClosMenu={handleCloseNavMenu}
        items={pages}
      />,
    ]}
  </Menu>
)

export default MobileMenu
