import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import { userItem, adminItem } from '../../../constants/routesConfig'
import { useAuth } from '../../../context/AuthProvider'
import { MenuItem } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AvatarComponent from '../AvatarComponent/AvatarComponent'
import NavMenuItems from '../NavMenuItems/NavMenuItems'
const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const { user, isAdmin, logout } = useAuth()
  const navigate = useNavigate()
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleLogout = async () => {
    try {
      await logout()
      setAnchorElUser(null)
      navigate('/')
    } catch (error) {
      console.error('Logout failed: ', error)
    }
  }
  const handleNavigateSchedule = () => {
    navigate('/schedule')
    setAnchorElUser(null)
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AvatarComponent handleOpenUserMenu={handleOpenUserMenu} />
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {user && [
          <NavMenuItems
            key="nav-items"
            items={isAdmin ? adminItem : userItem}
            handleCloseUserMenu={handleCloseUserMenu}
          />,
          <MenuItem key="schedule" onClick={handleNavigateSchedule}>
            Schedule
          </MenuItem>,
          <MenuItem key="logout" onClick={handleLogout}>
            Logout
          </MenuItem>,
        ]}
      </Menu>
    </Box>
  )
}
export default UserMenu
