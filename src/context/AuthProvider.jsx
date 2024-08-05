import { createContext, useContext, useState } from 'react'
import { getUserData, signIn, signOut } from '../services/authService'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(null)

  const login = async (email, password) => {
    try {
      const user = await signIn(email, password)

      const userData = await getUserData(user.uid)
      setIsAdmin(userData.isAdmin)
      setUser(user)
      console.log(userData.isAdmin ? 'Logged in as admin' : 'Logged in as user')
    } catch (error) {
      console.error('Error signing in: ', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut()
      setUser(null)
      setIsAdmin(false)
    } catch (error) {
      console.error('Error signing out: ', error)
      throw error
    }
  }

  const value = {
    user,
    login,
    logout,
    isAdmin,
    setIsAdmin,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
