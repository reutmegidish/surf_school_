import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthProvider'

const ProtectedRoute = ({ children, adminOnly }) => {
  const { user, isAdmin } = useAuth()

  if (!user) {
    return <Navigate to="/login" />
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute
