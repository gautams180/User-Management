import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='h-screen flex flex-col gap-10 justify-center items-center'>

      <h1 className='text-4xl text-black font-semibold'>User Management</h1>
      <div className='flex gap-2'>

        <Link to="/login">
          <button className='bg-[#c1121f] text-white p-2 rounded-md'>
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className='bg-[#c1121f] text-white p-2 rounded-md'>
            Register
          </button>
        </Link>


      </div>
    </div>
  )
}

export default Home