import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from './routes/Home'
import { Sobre } from './routes/Sobre'
import { Contato } from './routes/Contato'

const router = createBrowserRouter([
  {
  path:'/', 
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/sobre",
      element: <Sobre/>
    },
    {
      path: "/contato",
      element: <Contato/>

    }

    
  ] 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
