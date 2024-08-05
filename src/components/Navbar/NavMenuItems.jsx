import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'

const NavMenuItems = ({ items, handleClosMenu }) => {
  return (
    <>
      {items.map((item) => (
        <MenuItem
          key={item.name}
          component={Link}
          to={item.route}
          onClick={handleClosMenu}
        >
          {item.name}
        </MenuItem>
      ))}
    </>
  )
}

export default NavMenuItems
