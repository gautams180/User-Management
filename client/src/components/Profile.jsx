import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteProfile, updateUserDetails } from '../services/operations/userApi';


const Profile = () => {

    const {user} = useSelector((state) => state.profile);
    console.log("User in profile: ",user);

    const {id} = useParams();
    console.log("Id: ",id);

    const [formData, setFormData] = useState({
      firstname: user.firstName,
      lastName: user.lastName,
      email: user.email,
    })

    const {firstname,lastName,email} = formData;


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserDetails(id, firstname, lastName, email, navigate));
    }

    async function handleDelete() {
      try {
        dispatch(deleteProfile(id, navigate));
      }
      catch(error) {
        console.log("ERROR MESSAGE - ",error);
      }

    }

  return (
    <div className='h-screen flex flex-col gap-2 justify-center items-center'>

        <p className='text-3xl font-semibold text-black'>Profile Details</p>

        <div className='flex flex-col gap-3'>
            <form 
              onSubmit={handleOnSubmit}
              className='flex flex-col gap-3'
            >
                <label>
                    <p className='text-lg text-[#003049]'>First Name</p>
                    <input 
                        type='text'
                        name='firstName'
                        
                        onChange={handleOnChange}
                        placeholder={`${firstname}`}
                        className='rounded-md p-2 text-black'
                    />
                </label>
                <label>
                    <p className='text-lg text-[#003049]'>Last Name</p>
                    <input 
                        type='text'
                        name='lastName'

                        onChange={handleOnChange}
                        placeholder={lastName}
                        className='rounded-md p-2 text-black'
                    />
                </label>
                <label>
                    <p className='text-lg text-[#003049]'>Email</p>
                    <input 
                        type='text'
                        name='email'
                        value={email}
                        onChange={handleOnChange}
                        placeholder={email}
                        className='rounded-md p-2 text-black'
                    />
                </label>

                <div className='flex justify-between'>
                  <button 
                    type='submit'
                    className='bg-[#003049] p-2 rounded-md '
                  >
                    Save
                  </button>
                </div>
            </form>

            <button 
                type='button'
                onClick={handleDelete}
                className='bg-[#c1121f] p-2 rounded-md '
            >
                Delete Profile
            </button>

            
        </div>

        <Link to="/dashboard">
            <button className='bg-[#c1121f] p-1 rounded-md mb-10'>
                    Back to Dashboard
            </button>
        </Link>
    </div>
  )
}

export default Profile