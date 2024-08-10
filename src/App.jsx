import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import DynamicLayout from './layouts/DynamicLayout/DynamicLayout'
import './App.css'

import {
  AdminPanel,
  SurfingCourse,
  AllUsers,
  AddUser,
  LessonRegistration,
  UserSchedule,
  AttendanceManagement,
  HomePage,
  Login,
} from './pages'

import { OurInstructors, ProtectedRoute } from './components'
import AdminLessonPage from './pages/AdminPages/AdminLessonPage/AdminLessonPage'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/styles/theme'

const pageRoutes = [
  { path: 'surfing-course', element: <SurfingCourse /> },
  { path: 'our-instructors', element: <OurInstructors /> },
]

const adminRoutes = [
  { path: 'attendance-managment', element: <AttendanceManagement /> },
  { path: 'all-users', element: <AllUsers /> },
  { path: 'add-user', element: <AddUser /> },
  { path: 'logout', element: <HomePage /> },
  { path: 'weekly-lessons', element: <AdminLessonPage /> },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <DynamicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...pageRoutes,
      {
        path: 'login',
        element: <Login />,
      },

      {
        path: 'lesson-registration',
        element: <LessonRegistration />,
      },
      {
        path: 'schedule',
        element: (
          <ProtectedRoute>
            <UserSchedule />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute adminOnly>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <AdminPanel />,
          },
          ...adminRoutes,
        ],
      },
    ],
  },
])

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
