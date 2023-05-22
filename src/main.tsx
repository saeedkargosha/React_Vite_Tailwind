import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './input.css'
import App from './app'
import TaskA from './pages/task-a'
import TaskC from './pages/task-c'
import TaskB from './pages/task-b'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/task-a',
        element: <TaskA />,
      },
      {
        path: '/task-b',
        element: <TaskB />,
      },
      {
        path: '/task-c',
        element: <TaskC />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
)
