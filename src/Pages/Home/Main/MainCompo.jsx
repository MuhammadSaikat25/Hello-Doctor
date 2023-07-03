import { useEffect, useState } from 'react';
import img from '../../../assets/MainImg.jpg'
import axios from 'axios';
import img1 from '../../../assets/header-Doc1.jpg'
import img2 from  '../../../assets/header-doc2.jpg'

const MainCompo = () => {

    const [category, setCategory] = useState([])
    const [selectCategory, setSelectCategory] = useState('Periodontics')
    const findIng = category.filter(item => item.name === selectCategory)
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}services`)
            .then(res => {
                const data = res.data
                setCategory(data)
            })

    }, [])
    return (
        <div className="">
            <div className="p-10  lg:flex justify-between items-center  bg-gray-700">

                <div className=" text-white ">
                    <h1 className='font-semibold text-3xl space-y-10 mb-10 text-center lg:text-left'>Your Best Medical <br /> Help Center</h1>
                    <h1 className='space-y-10 text-center lg:text-left'>Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry’s stardard.</h1>
                </div>


                <div className="relative mt-14 lg:mt-0">
                    <img className='w-[200px] lg:w-[300px] mx-auto lg:mx-0  border-b-white border-4' src={img1} alt="" />
                    <img className='w-[200px] lg:w-[300px] mx-auto lg:mx-0 absolute -top-10 right-56 overflow-hidden lg:absolute lg:-top-10 lg:right-44 border-4' src={img2} alt="" />

                </div>
            </div>



            <div className='lg:flex  mb-30 mt-10'>
                <div className="">
                    <img className='h-[580px] w-[65s0px] object-fill' src={img} alt="" />
                </div>

                {/* =================================== */}

                <div className="mt-10">
                    <h1 className='font-bold underline text-red-500'>Our Services</h1>
                    <p className='text-gray-600'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div className="mt-5 flex gap-4 justify-between font-semibold flex-wrap bg-slate-100 cursor-pointer overflow-x- p-3 rounded-md">
                        {
                            category.map(item => <div onClick={() => setSelectCategory(item.name)} key={item._id}>{item.name}</div>)
                        }
                    </div>

                    <div className="">
                        {

                            findIng.map(item => <div key={item._id}>
                                <img className='w-[400px] h-[400px] rounded object-contain' src={item.image} alt="" />
                                <h1>{item.description}</h1>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCompo;