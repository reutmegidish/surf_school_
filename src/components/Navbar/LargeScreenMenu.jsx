import Box from '@mui/material/Box'
import NavMenuItems from './NavMenuItems'
import { pages } from '../../constants/routesConfig'

const LargeScreenMenu = ({ handleCloseNavMenu }) => (
  <Box
    sx={{
      flexGrow: 1,
      display: { xs: 'none', md: 'flex' },
      color: 'rgb(82, 82, 82)',
    }}
  >
    <NavMenuItems items={pages} handleClosMenu={handleCloseNavMenu} />
  </Box>
)

export default LargeScreenMenu
