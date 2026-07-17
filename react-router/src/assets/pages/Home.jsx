import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Home = () => {

    let navigate = useNavigate()

  return (
    <div>
      <h1>home page</h1>
      <button onClick={() => navigate('/home/detail')}>detail show</button>
      <Outlet />
    </div>
  )
}

export default Home
