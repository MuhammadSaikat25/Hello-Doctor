import axios from "axios";
import { useEffect, useState } from "react";
import SingleDoctor from "./SingleDoctor";

const OurDoctor = () => {

    const [doctor, setDoctor] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}doctor`)
            .then(res => {
                setDoctor(res.data)
            })

    }, [])
    console.log(doctor)
    return (
        <div className="mt-10">
            <div className="mb-10 mt10  text-center">
                    <h1 className="font-bold">Our Expert Doctors</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    doctor.slice(0, 3).map(doctor => <SingleDoctor key={doctor._id} doctor={doctor}></SingleDoctor>)
                }
            </div>
        </div>
    );
};

export default OurDoctor;