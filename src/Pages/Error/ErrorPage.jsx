import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/ErrorImg.png'

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <img className=' mx-auto h-[500px] ' src={errorImg} alt="" />
            <button className='text-center  w-full font-bold text-red-600 ' onClick={() => navigate('/')}> Back To Home </button>
        </div>
    );
};

export default ErrorPage;