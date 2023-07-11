import React from 'react';
import img from '../assets/Group.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="bg-[#F3F3F3] p-10 space-y-4 ">
            <div className="flex justify-between items-center mb-10 ">
                <div className='w-[50%]'>
                    <div className="flex items-center gap-3 text-3xl font-bold">
                        <img className='w[61px] h-[61px]' src={img} alt="" />
                        <h1><span className='text-red-400'>Doc</span> House</h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry. has been <br /> since the printer took.</p>
                    <Link to={`/appointment`}><button className='border p-2 rounded-lg mt-6 text-orange-600 border-orange-300'>Appointment</button></Link>
                </div>
                <div className="w-[50%]">
                    <h1 className='text-3xl font-bold'>Doc House Services</h1>
                    <p>Endodontics</p>
                    <p>General Dentistry</p>
                    <p>Prosthodontics</p>
                    <p>Periodontics</p>
                    <p>Orthodontics</p>
                    <p>Oral Surgery</p>
                </div>
                <div className="w-[50%] ">
                    <h1 className='text-3xl font-bold'>Working Hours</h1>
                    <h1>
                        Monday - 10 am to 7 pm
                    </h1>
                    <h1>
                        Tuesday - 10 am to 7 pm
                    </h1>
                    <h1>
                        Wednesday - 10 am to 7 pm
                    </h1>
                    <h1>
                        Thursday - 10 am to 7 pm
                    </h1>
                    <h1>
                        Friday - 10 am to 7 pm
                    </h1>
                    <h1>
                        Saturday - 10 am to 7 pm
                    </h1>
                    <h1>
                        Sunday - 10 am to 7 pm
                    </h1>
                </div>
            </div>
            <hr />
            <h1 className='text-center mt-5'>Copyright © 2022 - All right reserved by Doc House Ltd</h1>
        </div>
    );
};

export default Footer;