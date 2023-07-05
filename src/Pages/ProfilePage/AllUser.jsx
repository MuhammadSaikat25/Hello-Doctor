import React, { useEffect, useState } from 'react';
import AxiosSecure from '../../Utils/axiosSecure';

const AllUser = () => {
    const axiosSec = AxiosSecure()
    const [user, setUser] = useState([])
    useEffect(() => {
        axiosSec(`users`)
            .then(res => {
                const data = res.data
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
    console.log(user)
    return (
        <div className='mt-10 '>
            {
                user.map((item, i) => <table className='bg-rose-600 text-white mx-auto text-left w-[50%]  rounded my-auto' key={item._id}>
                    <tr>
                        <th></th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ROLE</th>
                        <th>Remove</th>
                    </tr>

                    <tr className='w-[50%]'>
                        <td>{i + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td onClick={() => updateRole(item)}>{item.role === 'admin' ? "admin" : <button>user</button>}</td>
                        <td>
                            <button className='bg-orange-500 p-1 text-white rounded'>Delete</button>
                        </td>
                    </tr>
                </table>)


            }
        </div>
    );
};

export default AllUser;