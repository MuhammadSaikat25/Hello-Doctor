import React from 'react';
import { FaPhoneVolume } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className='text-center mt-20 bg-gray-600 text-white p-5 rounded mb-20'>
            <h1>Contact With Us</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
            <p className='flex justify-center items-center'><span><FaPhoneVolume className='inline-flex'></FaPhoneVolume> +88 01750 14 14 14</span></p>
        </div>
    );
};

export default ContactUs;