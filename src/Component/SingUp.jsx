import { Link, useNavigate } from 'react-router-dom';
import singUp from '../assets/SingUp.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from './FireBase/AuthProvider';


const SingUp = () => {

    const { createUser, update } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handelReg = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email, password)
            .then(res => {
                update(name)
                    .then(res => {
                        console.log(res)
                        const obj = {
                            name,
                            email
                        }
                        fetch(`${import.meta.env.VITE_SERVER}user`, {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(obj)
                        })
                            .then(res => res.json())
                            .then(data => {
                                setError('')
                            })
                        navigate('/')
                    })
                    .catch(error => { })
            })
            .catch(error => {
              
                setError(error.message)
            })
    }
    return (
        <>
            <form onSubmit={handelReg}>
                <div className=' lg:flex justify-center items-center h-screen '>
                    <div className="lg:flex">
                        <img className='lg:w-[60%] object-contain' src={singUp} alt="" />

                        <div className="space-y-14 p-10 bg-orange-100 ">
                            <h1 className='font-bold'>Sign Up to <span className='text-red-500'>Doc House</span></h1>
                            <div className="">
                                <div className="">
                                    <h1 className='font-bold text-gray-600 mb-2'>Name</h1>
                                    <input className='border w-full p-2 rounded-md' type="text" name='name' placeholder='Name' required />
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <h1 className='font-bold text-gray-600 mb-2'>Email</h1>
                                    <input className='border w-full p-2 rounded-md' type="email" name='email' placeholder='Email' required />
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <h1 className='font-bold text-gray-600 mb-2'>Password</h1>
                                    <input className='border w-full p-2 rounded-md' type="password" name='password' placeholder='Password' required />
                                </div>
                                <h1 className='mt-10'>{error}</h1>
                            </div>

                            <button className='bg-blue-700 p-1  text-white font-bold w-full rounded-md'>Create Account</button>
                            <h1 className='font-bold'>Already registered? Go to <span className='text-red-500'><Link to={'/logIn'}>SIGN IN</Link></span></h1>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SingUp;