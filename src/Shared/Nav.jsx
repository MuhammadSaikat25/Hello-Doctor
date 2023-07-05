import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Component/FireBase/AuthProvider';
import AxiosSecure from '../Utils/axiosSecure';


const Nav = () => {
    const [open, setOpen] = useState(false)
    const { LogOut, user } = useContext(AuthContext)
    const [admin, setAdmin] = useState('')

    const axiosSec = AxiosSecure()
    useEffect(() => {
        axiosSec.get(`user/${user?.email}`)
            .then(res => {
                const data = res.data
                setAdmin(data)
            })
    })

    const logOut = () => {
        LogOut()
            .then(res => { })
            .catch(error => { })
    }

    return (
        <nav className=' bg-gray-700 '>
            <div className=" flex justify-between items-center p-5">
                <h1 className='font-semibold'><span className='text-red-500'>DOC</span> <span className='text-white'>House</span></h1>

                <div className="lg:flex text-white gap-10 hidden">
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/about'}>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/Appointment'}>Appointment</NavLink>
                    {
                        admin.role === 'admin' && <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/profile'}>Admin Profile</NavLink>
                    }
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/SingUp'}>Sing up</NavLink>
                    {
                        user ? <button onClick={logOut}>log Out</button> : <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/logIn'}>LogIn</NavLink>

                    }

                </div>
                {/* mobile navbar */}
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
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/'}>Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/about'}>About</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/Appointment'}>Appointment</NavLink>
                            {
                                admin.role === 'admin' && <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/profile'}>Admin Profile</NavLink>
                            }
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/SingUp'}>Sing up</NavLink>
                            {
                                user ? <button onClick={logOut}>log Out</button> : <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/logIn'}>LogIn</NavLink>

                            }
                        </div>
                    )
                }

            </div>
        </nav>
    );
};

export default Nav;