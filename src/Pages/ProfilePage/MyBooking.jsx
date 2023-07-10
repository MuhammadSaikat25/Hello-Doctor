import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Component/FireBase/AuthProvider';
import AxiosSecure from '../../Utils/axiosSecure';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyBooking = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = AxiosSecure()
    const [booking, setBooking] = useState([])
    useEffect(() => {
        axiosSecure.get(`user/appointment/${user?.email}`)
            .then(res => setBooking(res.data))
    }, [user])

    const handelBooking = (id) => {
       
        axiosSecure.delete(`delete/booking/${id}`)
            .then(res => {
                toast("Appointment conform!")
            })
    }
    return (
        <div>
            <ToastContainer />
            <table className=' lg:w-[800px] lg:h-[200px] mt-10 mx-auto '>
                <tr className='text-left bg-slate-600 text-yellow-50'>
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Services</th>
                    <th>Patient</th>
                    <th>Email</th>
                    <th>price</th>
                    <th>Action</th>
                </tr>
                {booking.map((item, i) => {
                    return (
                        <tr className='border-t-2 border-gray-950 ' key={i}>
                            <td>{i + 1}</td>
                            <td><img className='w-[70px] h-[70px] object-contain rounded-full' src={item.doctorImage} alt="" /></td>
                            <td>{item.doctorName}</td>
                            <td>{item.services}</td>
                            <td>{item.patient ? item.patient : "Unknown"}</td>
                            <td >{item.email}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => handelBooking(item._id)} className='bg-orange-500 p-1 text-white rounded'>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};


export default MyBooking;