import { addUserToDatabase } from '../services/authService'

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

    if (!formData.name || !formData.email || !formData.password) {
      setSnackbarMessage('All fields are required!')
      setSnackbarSeverity('error')
      setOpenSnackbar(true)
      setIsAddingUser(false)
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSnackbarMessage('Please enter a valid email address!')
      setSnackbarSeverity('error')
      setOpenSnackbar(true)
      setIsAddingUser(false)
      return
    }

    try {
      await addUserToDatabase(formData.name, formData.email, formData.password)
      setSnackbarMessage('User Added Successfully!')
      setSnackbarSeverity('success')
      setOpenSnackbar(true)
      setFormData({ name: '', email: '', password: '' })
    } catch (error) {
      console.error('Error adding user: ', error)
      setSnackbarMessage('Error adding user: ' + error.message)
      setSnackbarSeverity('error')
      setOpenSnackbar(true)
    } finally {
      setIsAddingUser(false)
    }
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return { handleChange, handleSubmit, handleCloseSnackbar }
}
