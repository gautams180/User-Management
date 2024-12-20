import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const {user} = useSelector((state) => state.profile);
    console.log("User in dashboard: ",user);

  return (
    <div className='h-screen flex flex-col gap-10 justify-center items-center'>

        <h1 className='text-3xl font-semibold text-black'>Dashboard </h1>

        <div className='flex gap-2'>
            <Link to="/">
                <button className='bg-[#c1121f]  p-1 rounded-md'>
                    Go to Home Page
                </button>
            </Link>

            <Link to={`/profile/${user?.id}`}>
                <button className='bg-[#c1121f]  p-1 rounded-md'>
                    Go to profile
                </button>
            </Link>

            <Link to="/users">
                <button className='bg-[#c1121f]  p-1 rounded-md'>
                    View Users
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Dashboard