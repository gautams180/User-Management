import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../services/operations/userApi';
import { Table, Tbody, Thead, Tr, Td } from 'react-super-responsive-table'

const Users = () => {

    const [users, setUsers] = useState([]);

    const dispatch = useDispatch();

    const fetchUsers = async() => {
        console.log("Before dispatch")
        const result =await dispatch(getAllUsers);
        setUsers(result);
        
    }

    console.log("Result users", users);

    useEffect(() => {
        fetchUsers();
    },[])

  return (
    <div className='h-screen flex flex-col gap-2 justify-center items-center'>

        <h1 className='text-3xl font-semibold text-black'>Users List</h1>
        
        <div className=' w-[900px] flex flex-col gap-2 bg-[#669bbc] rounded-sm p-5'>
            <div className='flex w-[100%] text-black text-xl font-semibold'>
                <div className='w-1/4'>ID</div>
                <div className='w-1/4'>First Name</div>
                <div className='w-1/4'>Last Name</div>
                <div className='w-1/4'>Email</div>
            </div>
            {users?.map((user) => (
                <div key={user.id} className='flex w-[100%]'>
                    <div className='w-1/4'>{user.id}</div>
                    <div className='w-1/4'>{user.firstName}</div>
                    <div className='w-1/4'>{user.lastName}</div>
                    <div className='w-1/4'>{user.email}</div>
                </div>
            ))}
        </div>

        {/* <Table className='text-black'>
            <Thead>
                <Tr>
                    <Td>
                        ID
                    </Td>
                    <Td>
                        First Name
                    </Td>
                    <Td>
                        Last Name
                    </Td>
                    <Td>
                        Email
                    </Td>
                </Tr>
            </Thead>
            <Tbody>
                {
                    users.length === 0 ? (
                        <Tr>
                            <Td>
                                No users found
                            </Td>
                        </Tr>
                    ) 
                    : (
                        users.map((user) => (
                            <Tr>
                                <Td>
                                    {user.id}
                                </Td>
                                <Td>
                                    {user.firstName}
                                </Td>
                                <Td>
                                    {user.lastName}
                                </Td>
                                <Td>
                                    {user.email}
                                </Td>
                            </Tr>
                        ))
                    )
                }
            </Tbody>
        </Table> */}



    </div>
  )
}

export default Users