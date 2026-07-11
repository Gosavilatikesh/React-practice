import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {

  const [toggle, setToggle] = useState(false)

  const [users, setUsers] = useState([])

  return (
    <div>
      {toggle ? <Login setToggle={setToggle} /> : <Register setUsers={setUsers} setToggle={setToggle} />}
    </div>
  )
}

export default App;