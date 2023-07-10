import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Component/FireBase/AuthProvider';
import AxiosSecure from '../../Utils/axiosSecure';

const ProfileNav = () => {
    const { user } = useContext(AuthContext)
    const axiosSec=AxiosSecure()
    const isAdmin = () => {
        axiosSec.get(`user/admin/${user?.email}`)
            .then(res => {
                console.log(10)
                return res.data.admin
            })
    }
    const admin = isAdmin
    

    return (
        <div>
            {
                admin && <div className="flex justify-between font-semibold text-white bg-slate-900 p-2 my-auto">
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={`/profile/allUser`}>All Users</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={`/profile/addDoctor`}>Add a Doctor</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-300' : ''} to={`/profile/manageUser`}>Manage Doctors</NavLink>
                </div>
            }

        </div>
    );
};

export default ProfileNav;