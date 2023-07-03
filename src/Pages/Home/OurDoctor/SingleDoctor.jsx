
const SingleDoctor = ({ doctor }) => {
    console.log(doctor)
    const { name, image, award, price, review, businessHours } = doctor
    return (
        <div className="border mx-auto rounded-md p-5 text-gray-600">
            <img className="w-[300px] h-[300px] object-contain  bg-slate-300 rounded-md" src={image} alt="" />
            <h1>{name}</h1>
            <h1>{price}</h1>
                <hr className="mb-5 mt-5" />
            <h1>
                <span></span>
                {
                    Object.keys(businessHours).map((key) => (
                        <h3 className="space-y-10"><span className="font-semibold">{key}</span> : {businessHours[key]}</h3>
                    ))

                }
            </h1>
            <h1><span className="font-semibold">location</span> : Dhanmondi, Dhaka, Bangladesh</h1>
            <button className="bg-orange-500 text-white mt-3 w-full font bold rounded-md  hover:bg-gray-600 ">View Details</button>
        </div>
    );
};

export default SingleDoctor;