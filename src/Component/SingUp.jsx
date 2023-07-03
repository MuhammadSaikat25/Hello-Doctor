import { Link, useNavigate } from 'react-router-dom';
import singUp from '../assets/SingUp.jpg'
import { useContext } from 'react';
import { AuthContext } from './FireBase/AuthProvider';


const SingUp = () => {

    const { createUser } = useContext(AuthContext)
    const navigate=useNavigate()


    const handelReg = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email, password)
            .then(res =>{
                navigate('/')
            })
            .catch(error => console.log(error.message))
    }
    return (
        <form onSubmit={handelReg}>
            <div className=' lg:flex justify-center items-center h-screen '>
                <div className="lg:flex">
                    <img className='lg:w-[60%] ' src={singUp} alt="" />

                    <div className="space-y-14 p-10 bg-orange-100 ">
                        <h1 className='font-bold'>Sign Up to <span className='text-red-500'>Doc House</span></h1>
                        <div className="">
                            <div className="">
                                <h1 className='font-bold text-gray-600 mb-2'>Name</h1>
                                <input className='border w-full' type="text" name='name' placeholder='Name' />
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h1 className='font-bold text-gray-600 mb-2'>Email</h1>
                                <input className='border w-full' type="email" name='email' placeholder='Email' />
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h1 className='font-bold text-gray-600 mb-2'>Password</h1>
                                <input className='border w-full' type="password" name='password' placeholder='Password' />
                            </div>
                        </div>
                        <button className='bg-blue-700 p-1  text-white font-bold w-full rounded-md'>Create Account</button>
                        <h1 className='font-bold'>Already registered? Go to <span className='text-red-500'><Link to={'/logIn'}>SIGN IN</Link></span></h1>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SingUp;