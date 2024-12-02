import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { register } from '../services/operations/authAPI';

const Register = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);

    const {firstName,lastName,email,password,confirmPassword} = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(register(firstName,lastName,email,password,confirmPassword,navigate));
    }


  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-3'>
            <Link to="/">
                <button className='bg-[#c1121f]  p-1 rounded-md'>
                    Home Page
                </button>
            </Link>
            <h1 className='text-3xl font-semibold text-black'>Register</h1>
            <div>
                <form
                    onSubmit={handleOnSubmit}
                    className='flex flex-col items-center gap-3'
                >
                    <label>
                        <p className='text-lg text-[#003049]'>First Name</p>
                        <input 
                            required
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={handleOnChange}
                            placeholder='Enter First Name'
                            className='rounded-md p-2 text-black'
                        />
                    </label>
                    <label>
                        <p className='text-lg text-[#003049]'>Last Name</p>
                        <input 
                            required
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={handleOnChange}
                            placeholder='Enter Last Name'
                            className='rounded-md p-2 text-black'
                        />
                    </label>
                    <label>
                        <p className='text-lg text-[#003049]'>Email</p>
                        <input 
                            required
                            type='text'
                            name='email'
                            value={email}
                            onChange={handleOnChange}
                            placeholder='Enter Your Email'
                            className='rounded-md p-2 text-black'
                        />
                    </label>
                    <label className='relative'>
                        <p className='text-lg text-[#003049]'>Password</p>
                        <input 
                            required
                            type={showPassword ? "text" : "password"}
                            name='password'
                            value={password}
                            onChange={handleOnChange}
                            placeholder='Enter password'
                            className='rounded-md p-2 text-black'
                        />
                        <span
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                            >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                    <label className='relative'>
                        <p className='text-lg text-[#003049]'>Confirm Password</p>
                        <input 
                            required
                            type={showPassword ? "text" : "password"}
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleOnChange}
                            placeholder='Confirm password'
                            className='rounded-md p-2 text-black'
                        />
                        <span
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                            >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>

                    <div>
                        <button
                            type='submit'
                            className='bg-[#003049] p-2 rounded-md '
                        >
                            Create User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register