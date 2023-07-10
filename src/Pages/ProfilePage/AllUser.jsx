import React, { useEffect, useState } from 'react';
import AxiosSecure from '../../Utils/axiosSecure';

const AllUser = () => {

    
    const axiosSec = AxiosSecure()
    const [user, setUser] = useState([])
    useEffect(() => {
        axiosSec(`users`)
            .then(res => {
                setUser(res.data)
            })
    }, [])

    const updateRole = (user) => {

        fetch(`${import.meta.env.VITE_SERVER}user/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const deleteUser=(id)=>{
       fetch(`${import.meta.env.VITE_SERVER}delete/user/${id}`,{
        method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
    }

    return (
        <div className='mt-10'>

            <table className=' lg:w-[800px] lg:h-[200px] mt-10 mx-auto '>
                <tr className='text-left bg-slate-600 text-yellow-50'>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Delete</th>
                </tr>
                {user.map((item, i) => {
                    return (
                        <tr className='border-t-2 border-gray-950 ' key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td >{item.email}</td>
                            <td onClick={() => updateRole(item)}>{item.role === 'admin' ? "admin" : <button>user</button>}</td>
                            <td>
                                <button onClick={()=>deleteUser(item._id)} className='bg-orange-500 p-1 text-white rounded'>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};

export default AllUser;