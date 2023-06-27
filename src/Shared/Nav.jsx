import { NavLink } from 'react-router-dom';
import img1 from '../assets/header-Doc1.jpg'
import img2 from '../assets/header-doc2.jpg'
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { useState } from 'react';


const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='max-w-7xl mx-auto w-full bg-gray-700 '>
            <div className=" flex justify-between items-center p-5">
                <h1 className='font-semibold'><span className='text-red-500'>DOC</span> <span className='text-white'>House</span></h1>
                <div className="lg:flex text-white gap-10 hidden">
                    <NavLink className={({isActive})=>isActive?'text-purple-600':''}>Home</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-purple-600':''}>About</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-purple-600':''}>Appointment</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-purple-600':''}>LogIn</NavLink>
                </div>
                <div className="lg:hidden">
                    {
                        <span onClick={() => setOpen(!open)}>
                            {
                                open ? <FaTimes></FaTimes > : <FaChevronDown className='lg:hidden ' size={30} color='white'></FaChevronDown>
                            }
                        </span>

                    }
                </div>
                {
                    open && (
                        <div className="lg:hidden flex flex-col text-white py-20">
                            <NavLink className={({isActive})=>isActive?'text-purple-600':''}>Home</NavLink>
                            <NavLink className={({isActive})=>isActive?'text-purple-600':''}>About</NavLink>
                            <NavLink className={({isActive})=>isActive?'text-purple-600':''}>Appointment</NavLink>
                            <NavLink className={({isActive})=>isActive?'text-purple-600':''}>LogIn</NavLink>
                        </div>
                    )
                }

            </div>
            <div className="">
                
            </div>

            {/* ======================= */}
            <div className="p-5 mt-16 lg:flex justify-between items-center">

                <div className=" text-white ">
                    <h1 className='font-semibold text-3xl space-y-10 mb-10 text-center lg:text-left'>Your Best Medical <br /> Help Center</h1>
                    <h1 className='space-y-10 text-center lg:text-left'>Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry’s stardard.</h1>
                </div>


                <div className="relative mt-14 lg:mt-0">
                    <img className='w-[200px] lg:w-[300px] mx-auto lg:mx-0  border-b-white border-4' src={img1} alt="" />
                    <img className='w-[200px] lg:w-[300px] mx-auto lg:mx-0 absolute -top-10 right-56 overflow-hidden lg:absolute lg:-top-10 lg:right-44 border-4' src={img2} alt="" />
                    
                </div>
            </div>
        </nav>
    );
};

export default Nav;