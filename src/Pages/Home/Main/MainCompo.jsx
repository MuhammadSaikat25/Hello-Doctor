import { useEffect, useState } from 'react';
import img from '../../../assets/MainImg.jpg'
import axios from 'axios';
const MainCompo = () => {

    const [category, setCategory] = useState([])
    const [selectCategory, setSelectCategory] = useState('Periodontics')
    const findIng = category.filter(item => item.name === selectCategory)
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}category`)
            .then(res => {
                const data = res.data
                setCategory(data)
            })

    }, [])
    return (
        <div className='lg:flex  mb-30'>
            <div className="">
                <img className='h-[580px] w-[500px] object-fill' src={img} alt="" />
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
                            <h1>{item.details}</h1>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainCompo;