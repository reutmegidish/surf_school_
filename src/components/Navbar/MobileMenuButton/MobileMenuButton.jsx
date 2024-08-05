import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const MobileMenuButton = ({ handleOpenNavMenu, display }) => (
  <Box sx={{ flexGrow: 1, display: display }}>
    <IconButton
      size="large"
      aria-label="open navigation menu"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      sx={{ color: 'rgb(82, 82, 82)' }}
    >
      <MenuIcon />
    </IconButton>
  </Box>
)

export default MobileMenuButton
