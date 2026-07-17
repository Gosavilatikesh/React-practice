import React from 'react'
import { Route, Routes } from 'react-router'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import About from '../pages/About'
import Detail from '../pages/Detail'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path="/home" element={<Home/>}>
            <Route path='detail' element={<Detail />}/>
          </Route>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes
