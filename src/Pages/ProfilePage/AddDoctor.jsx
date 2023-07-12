import { useState } from "react";
import AxiosSecure from "../../Utils/axiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDoctor = () => {
    const [selects, setSelects] = useState()
    const axiosSec = AxiosSecure()


    const GetData = (e) => {
        e.preventDefault()
        const img = e.target.img.files[0]
        const name = e.target.name.value
        const price = parseFloat(e.target.price.value)
        const award = e.target.award.value
        const education = e.target.education.value
        const services = selects

        const formData = new FormData()
        formData.append('image', img)
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const image = imageData.data.display_url
                const DoctorData = {
                    name, image, services, education, price, award
                }
                axiosSec.post(`added/Doctor`, DoctorData)
                    .then(res => {
                        toast("Added a Doctor Successful")
                    })
            })

    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={GetData}>
                <div className="w-full lg:w-[383px] lg:mx-auto mt-10" >
                    <div className="gird grid-cols-2">
                        <input className="border w-full lg:w-[382px] p-1 mx-auto border-gray-950" type="text" name="name" placeholder="Name" required /><br /><br />

                        <label htmlFor="Specialty">Specialty</label><br />
                        <select id="Specialty" className="w-full border lg:w-[382px] p-1 lg:mx-auto border-gray-950" value={selects} onChange={(e) => setSelects(e.target.value)} required>
                            <option value=""></option>
                            <option value="Endodontics">Endodontics</option>
                            <option value="General Dentistry">General Dentistry</option>
                            <option value="Prosthodontics">Prosthodontics</option>
                            <option value="Periodontics">Periodontics</option>
                            <option value="Orthodontics">Orthodontics</option>
                            <option value="Oral Surgery">Oral Surgery</option>
                        </select><br /><br /><br />

                        <div className="border w-full lg:w-[382px] text-center p-1 lg:mx-auto border-gray-950">
                            <label htmlFor="Img">Upload Image</label>
                            <input className="hidden" type="file" name="img" id="Img" accept="image/*" required/>
                        </div><br /><br />
                        <input className="border w-full lg:w-[382px]  p-1 lg:mx-auto border-gray-950" type="text" name="education" placeholder="Education" required /><br /><br />
                        <input className="border w-full lg:w-[382px]  p-1 lg:mx-auto border-gray-950" type="text" name="price" placeholder="Price" required/><br /><br />
                        <input className="border w-full lg:w-[382px]  p-1 lg:mx-auto border-gray-950" type="text" name="award" placeholder="Award" required/>
                    </div><br />
                    <button className="bg-rose-900 w-full text-white p-1 rounded" type="submit">Add Doctor</button>
                </div>
            </form>
        </>
    );
};

export default AddDoctor;