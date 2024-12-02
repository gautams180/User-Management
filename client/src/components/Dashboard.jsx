import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const {user} = useSelector((state) => state.profile);
    console.log("User in dashboard: ",user);

  return (
    <div className='h-screen flex gap-2 justify-center items-center'>

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
  )
}

export default Dashboard