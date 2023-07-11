import { NavLink } from "react-router-dom";

const SingleDoctor = ({ doctor }) => {

    const { name, image, price, businessHours, } = doctor
    return (
        <div className="border mx-auto rounded-md p-5 text-gray-600">
            <img className="w-[300px] h-[300px] object-contain  bg-slate-300 rounded-md" src={image} alt="" />
            <h1>{name}</h1>
            <h1>{price}</h1>
            <hr className="mb-5 mt-5" />
            <h1><span className="font-semibold">location</span> : Dhanmondi, Dhaka, Bangladesh</h1>
            <NavLink to={`/doctorDetails/${doctor._id}`}><button className="bg-orange-500 text-white mt-3 w-full font bold rounded-md  hover:bg-gray-600 ">View Details</button></NavLink>
        </div>
    );
};

export default SingleDoctor;

