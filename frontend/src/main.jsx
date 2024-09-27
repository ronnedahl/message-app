import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import WriteMessages from './components/WriteMessages.jsx'
import RemovedMessages from './components/RemovedMessages.jsx'
import { getMessages } from '../api.js'
import EditMessage from './components/EditMessage.jsx'

const router = createBrowserRouter([{
  path: '/flow',
  element: <App />,

},
{
  path: '/messages',
  element: <WriteMessages
    fetchMessage={getMessages} />,
},

{
  path: '/no-messages',
  element: <RemovedMessages />,

},

{
  path: '/edit/:id',
  element: <EditMessage />,

},

{
path: '/',
element: <Navigate to="/flow" replace />

},

{
  path: '*',
  element: <div>404 Page Not Found</div>,
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
