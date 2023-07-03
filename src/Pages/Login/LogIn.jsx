import { Link, useNavigate } from 'react-router-dom';
import singUp from '../../assets/SingUp.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Component/FireBase/AuthProvider';


const LogIn = () => {
    const {LogIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handelLog=e=>{
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value 
        console.log(email,password)
        LogIn(email,password)
            .then(res=>{
                navigate('/')
            })
            .catch(error=>{})
    }

    return (
        <form onSubmit={handelLog}>
            <div className=' lg:flex justify-center items-center h-screen '>
                <div className="lg:flex">
                    <img className='lg:w-[60%] object-contain' src={singUp} alt="" />

                    <div className="space-y-14 p-10 bg-orange-100 ">
                        <h1 className='font-bold'>Sign In to <span className='text-red-500'>Doc House</span></h1>

                        <div className="">
                            <div className="">
                                <h1 className='font-bold text-gray-600 mb-2'>Email</h1>
                                <input className='border w-full p-2 rounded-md' name='email' type="email" placeholder='Email' />
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h1 className='font-bold text-gray-600 mb-2'>Password</h1>
                                <input className='border w-full p-2 rounded-md' type="password" name='password' placeholder='Password' />
                            </div>
                        </div>
                        <button className='bg-blue-700 p-1  text-white font-bold w-full rounded-md'>SIGN IN</button>
                        <h1 className='font-bold'>Please register at first. Go to <span className='text-red-500'><Link to={'/SingUp'}>SIGN UP</Link></span></h1>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LogIn;