import React, { useEffect, useState } from 'react';
import AxiosSecure from '../../Utils/axiosSecure';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageUser = () => {
    const axiosSecure=AxiosSecure()
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}doctor`)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    const doctorDelete=(id)=>{
        console.log(id)
        axiosSecure.delete(`delete/doctor/${id}`)
            .then(res=>{
                toast("Delete a Doctor Successful")
            })
    }
    return (
        <div>
            <div>
            <ToastContainer />
                <table className=' lg:w-[800px] lg:h-[200px] mt-10 mx-auto'>
                    <tr className='text-left bg-slate-600 text-yellow-50'>
                        <th></th> 
                        <th>Image</th> 
                        <th>Name</th>
                        <th>Services</th>
                        <th>Action</th>
                    </tr>
                    {doctor.map((data,i) => {
                        return (
                            <tr className='border-t-2 border-b-gray-950' key={i}>
                                <td>{i+1}</td>
                                <td><img className='w-[70px] h-20 object-contain rounded-full' src={data?.image} alt="" /></td>
                                <td>{data?.name}</td>
                                <td>{data?.services}</td>
                                <td><button onClick={()=>doctorDelete(data._id)} className='bg-purple-600 p-1 rounded text-white'>Delete</button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    );
};

export default ManageUser;