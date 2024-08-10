export const validateFormData = (formData) => {
  if (!formData.name || !formData.email || !formData.password) {
    return { valid: false, message: 'All fields are required!' }
  }
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    return { valid: false, message: 'Please enter a valid email address!' }
  }
  return { valid: true }
}
