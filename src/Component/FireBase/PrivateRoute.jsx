import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const navigate=useNavigate()
    if(loading){
        return <h1>loading....</h1>
    }
    if(user){
       return children    
    }else{
        navigate('logIn')
    }
    return (
        <div className=""></div>
    );
};

export default PrivateRoute;