import React from 'react'
import { Outlet } from 'react-router-dom'

import { Link, link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
      <Link to="/">Home</Link>
      <Link to="/">Nav</Link>
      <Link to="/logo">Logo</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Cart">Cart</Link>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Home