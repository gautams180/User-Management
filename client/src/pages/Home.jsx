import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='h-screen flex justify-center items-center'>
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