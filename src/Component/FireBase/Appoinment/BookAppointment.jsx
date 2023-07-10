import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookAppointment = ({ data }) => {
    const { user } = useContext(AuthContext)


    const Booking = () => {

        const appointment = {
            email: user?.email,
            doctorName: data.name,
            doctorImage: data.image,
            price: data.price,
            services: data.services
        }
        fetch(`${import.meta.env.VITE_SERVER}Patients`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast("Appointment conform!")
                }
            })
    }

    return (
        <div className='border w-fit p-1 space-y-2 mx-auto' key={data._id}>

            <ToastContainer />
            <img className='w-[300px] mx-auto h-[300px] object-contain' src={data.image} alt="" />
            <h1 className='font-bold'>{data.name}</h1>
            <h1 className='font-bold'>Education: {data.education}</h1>
            <h1>{data.price}</h1>
            <h1 className='font-bold'>{data.services}</h1>
            <hr />
            <button onClick={Booking} className=' text-center w-full bg-rose-600 p-1 text-white font-semibold'>Book Appointment</button>
        </div>)

};

export default BookAppointment;