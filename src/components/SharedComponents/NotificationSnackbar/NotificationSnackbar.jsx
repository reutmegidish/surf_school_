import { Snackbar, Alert, Box } from '@mui/material'

const NotificationSnackbar = ({ open, onClose, message, severity }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        sx={{
          maxWidth: '400px',
          width: '100%',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Alert
          onClose={onClose}
          severity={severity}
          sx={{
            width: '100%',
            transition: 'transform 0.5s ease',
            transform: severity === 'success' ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default NotificationSnackbar
