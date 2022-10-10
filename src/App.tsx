import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RegisterPage } from '@/pages/RegisterPage'
import { ProvideAuth } from '@/hooks/useAuth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
  {
    path: '/register',
    element: <RegisterPage />,
  },
])

function App() {
  return (
    <ProvideAuth>
      <ToastContainer />
      <RouterProvider router={router} />
    </ProvideAuth>
  )
}

export default App
