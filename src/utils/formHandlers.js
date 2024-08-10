import { validateFormData } from '../utils/formHelpers'
import { handleSnackbar } from '../utils/snackbarHelpers'
import { addUserToDatabase } from '../../src/services/authService'

export const useFormHandlers = (
  formData,
  setFormData,
  setIsAddingUser,
  setSnackbarMessage,
  setSnackbarSeverity,
  setOpenSnackbar
) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsAddingUser(true)

    const { valid, message } = validateFormData(formData)
    if (!valid) {
      handleSnackbar(
        setSnackbarMessage,
        setSnackbarSeverity,
        setOpenSnackbar,
        message,
        'error'
      )
      setIsAddingUser(false)
      return
    }

    try {
      await addUserToDatabase(formData.name, formData.email, formData.password)
      handleSnackbar(
        setSnackbarMessage,
        setSnackbarSeverity,
        setOpenSnackbar,
        'User Added Successfully!',
        'success'
      )
      setFormData({ name: '', email: '', password: '' })
    } catch (error) {
      console.error('Error adding user: ', error)
      handleSnackbar(
        setSnackbarMessage,
        setSnackbarSeverity,
        setOpenSnackbar,
        'Error adding user: ' + error.message,
        'error'
      )
    } finally {
      setIsAddingUser(false)
    }
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return { handleChange, handleSubmit, handleCloseSnackbar }
}
