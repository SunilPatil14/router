import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ROUTERS/Home'
import Nav from './ROUTERS/Nav'
import Logo from './ROUTERS/Logo'
import Cart from './ROUTERS/Cart'
import Login from './ROUTERS/Login'

let router=createBrowserRouter([
  {
    path:"/",
    element:<Home>
     
    </Home>,
    children:[
      {
        path:"/",
        element:<Nav>
          
        </Nav>,
        children:[
          {
            path:"/Logo",
            element:<Logo></Logo>
          },
          {
            path:"/Cart",
            element:<Cart></Cart>
          },
          {
            path:"/Login",
            element:<Login></Login>
          }
        ]
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider route={router}>


      </RouterProvider>
    </div>
  )
}

export default App