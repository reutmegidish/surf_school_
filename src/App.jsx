import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import DynamicLayout from './layouts/DynamicLayout/DynamicLayout'
import './App.css'

import {
  AdminPanel,
  HomePage,
  Login,
  SurfingCourse,
  AllUsers,
  AddUser,
  LessonRegistration,
  UserSchedule,
  AttendanceManagement,
} from './pages'

import AdminLessonPage from './pages/AdminPage/AdminLessonPage/AdminLessonPage'
import { OurInstructors, ProtectedRoute } from './components'

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
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
