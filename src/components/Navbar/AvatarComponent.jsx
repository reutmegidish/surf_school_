import Avatar from '@mui/material/Avatar'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { useAuth } from '../../context/AuthProvider'

const AvatarComponent = ({ handleOpenUserMenu }) => {
  const { user } = useAuth()
  return (
    <IconButton sx={{ p: 0 }} onClick={user ? handleOpenUserMenu : () => {}}>
      {user ? (
        <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
      ) : (
        <Avatar component={Link} to="/login">
          <PermIdentityIcon sx={{ color: 'rgb(82, 82, 82)' }} />
        </Avatar>
      )}
    </IconButton>
  )
}
//

export default AvatarComponent
