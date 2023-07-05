import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileNav = () => {
    const admin = true
    return (
        <div>
            {
                admin ? <div className="flex justify-between font-semibold text-white bg-slate-900 p-2 my-auto">
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={`/profile/allUser`}>All Users</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={`/profile/addDoctor`}>Add a Doctor</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={`/profile/manageUser`}>Manage Doctors</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/'}>Home</NavLink>
                </div>
                :
                <div><NavLink className={`text-center`}>a</NavLink></div>
           }
            <div className=""></div>
        </div>
    );
};

export default ProfileNav;