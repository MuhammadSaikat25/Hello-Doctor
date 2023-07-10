import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Component/FireBase/AuthProvider';

const ProfileNav = () => {
    const {admin}=useContext(AuthContext)
    return (
        <div>
            {
               admin? <div className="flex justify-between font-semibold text-white bg-slate-900 p-2 my-auto">
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={`/profile/allUser`}>All Users</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={`/profile/addDoctor`}>Add a Doctor</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={`/profile/manageUser`}>Manage Doctors</NavLink>
                </div>
                :<div className='flex gap-20 justify-center mt-2 bg-slate-950 text-white w-[45%] mx-auto'>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''}  to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''}  to={'/profile/myBooking'}>My Booking</NavLink>
                </div>
            }
        </div>
    );
};

export default ProfileNav;