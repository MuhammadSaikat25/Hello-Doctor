import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import axios from "axios";

const BookAppointment = ({ data }) => {
    const { user } = useContext(AuthContext)


    const Booking = () => {

        

    }

    return (
        <div className='border w-fit p-1 space-y-2 mx-auto' key={data._id}>
            <img className='w-[300px] mx-auto h-[300px] object-contain' src={data.image} alt="" />
            <h1 className='font-bold'>{data.name}</h1>
            <h1 className='font-bold'>Education: {data.education}</h1>
            <h1>{data.price}</h1>
            <h1 className='font-bold'>{data.services}</h1>
            <hr />
            <span>
                {
                    Object.keys(data.businessHours).map((key, i) => (
                        <h3 key={i} className="space-y-10"><span className="font-semibold">{key}</span> : {data.businessHours[key]}</h3>
                    ))

                }
            </span>
            <button onClick={Booking} className=' text-center bg-rose-600 p-1 text-white rounded-md font-semibold'>Book Appointment</button>
        </div>)

};

export default BookAppointment;