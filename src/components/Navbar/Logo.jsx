import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const Logo = ({ display, flexGrow = 0 }) => (
  <Typography
    component={Link}
    to={'/'}
    variant="h5"
    noWrap
    sx={{
      mr: 2,
      display: display,
      flexGrow: flexGrow,
    }}
  >
    <img
      src="/images/sea-logo.png"
      alt="Logo"
      style={{ width: 40, marginRight: 10 }}
    />
  </Typography>
)
//
export default Logo
