import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DoctorDetails = () => {
    const data = useLoaderData()
    const { image, name, awards
        ,education,services,price } = data
    return (
        <div>
            <div className="bg-gray-700 p-10 text-white">
                <h1>Home / Doctor Profile</h1>
                <h1 className='text-5xl'>Doctor Profile</h1>
            </div>
            <div className="mt-10 gap-3 p-10 mb-10">
                <img className='w-[300px] border bg-slate-400 ' src={image} alt="" />
                <div className="">
                    <h1>Name : {name}</h1>
                    <h1>Education : {education}</h1>
                    <h1>Service : {services}</h1>
                    <h1>Fee : {price}</h1>
                    <span>
                        <h1 className='underline'>Awards</h1>
                        {
                            awards.map((item,i)=><li key={i}>{item}</li>)
                        }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;