export const handleSnackbar = (
  setSnackbarMessage,
  setSnackbarSeverity,
  setOpenSnackbar,
  message,
  severity
) => {
  setSnackbarMessage(message)
  setSnackbarSeverity(severity)
  setOpenSnackbar(true)
}
