import React, { useContext, useEffect } from 'react';
import AxiosSecure from './axiosSecure';
import { AuthContext } from '../Component/FireBase/AuthProvider';

const GetUser = () => {
    const {user}=useContext(AuthContext)
    const axiosSec=AxiosSecure()
    useEffect(()=>{
        axiosSec.get(`user/${user?.email}`)
           
    })
    return (
        <div>
            
        </div>
    );
};

export default GetUser;