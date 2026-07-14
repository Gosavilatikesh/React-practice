import React from 'react'
import { MyShop } from '../context/MyContext'
import { useContext } from "react";

const Navbar = () => {

   let {setIsCartOpen} = useContext(MyShop)


  return (
    <div className='flex items-center justify-between bg-black text-white rounded p-4'>
      <div>Logo</div>
      <div className='flex gap-10 text-xl'>
        <p onClick={() => setIsCartOpen(false)} className='cursor-pointer'>Home</p>
        <p onClick={() => setIsCartOpen(true)} className='cursor-pointer'>Cart</p>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
