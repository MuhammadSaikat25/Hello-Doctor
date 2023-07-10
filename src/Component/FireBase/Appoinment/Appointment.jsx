import axios from 'axios';
import clinicImg from '../../../assets/clinicBg.png'
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import BookAppointment from './BookAppointment';


const Appointment = () => {
   
    
    const [value, onChange] = useState(new Date());
    const [service, setServices] = useState([])
    const [doctor, setDoctor] = useState([])
    const [category, setCategory] = useState('')
    const servicesDoctor = doctor.filter(item => item.services == category)
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}services`)
            .then(res => {
                const data = res.data
                setServices(data)
            })
        axios.get(`${import.meta.env.VITE_SERVER}doctor`)
            .then(res => {
                setDoctor(res.data)
            })

    }, [])

    return (
        <div className=''>
            {/* image and date */}
            <div className=" lg:flex mt-10 items-center justify-between ">
                <Calendar className={`border w-full z-10 bg-rose-400 rounded-md lg:w-[400px] mb-10 h-[270px] text-white`} onChange={onChange} value={value} />
                <img className='w-full lg:w-[400px] rounded-md' src={clinicImg} alt="" />
            </div>


            <div className="">
                <h1 className='text-center font-bold text-2xl mb-10 mt-20'>Please select a service.</h1>
                {/* services */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    {
                        service.map((item) =>
                            <div onClick={() => setCategory(item.name)} className='flex items-center shadow-md bg-slate-50 p-2 gap-2 cursor-pointer' key={item._id}>
                                <img className='w-[100px] h-[100px] rounded object-contain ' src={item.image} alt="" />
                                <h1 className='font-bold '>{item.name}</h1>
                            </div>)
                    }
                </div>
            </div>

            {/* doctors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                {
                    servicesDoctor.map(data =><BookAppointment key={data._id} data={data}></BookAppointment>)
                }
            </div>
        </div>
    );
};

export default Appointment;