import { BiBeenHere } from "react-icons/bi";
const Time = () => {
    return (
        <div className="lg:flex justify-around items-center mt-10">
            <div className="bg-black text-gray-200 p-5 rounded-md">
                <h1 className="font-bold">Opening Hour</h1>
                <h1>Open 9.00 am to 5.00pm <br /> Everyday</h1>
            </div>

            <div className="bg-red-400 p-5 text-white mb-10 mt-10 rounded-md">
                <span className="inline-flex items-center">
                    <BiBeenHere className="mr-2" color="black" size={25}></BiBeenHere>
                <h1 className="font-bold">Our Locations</h1>
                </span>
                <h1>Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</h1>
            </div>

            <div className="bg-purple-400 text-white rounded-md p-5">
                <h1 className="font-bold">Contact Us</h1>
                <h1>+88 01750 00 00 00 <br />
                    +88 01750 00 00 00</h1>
            </div>
        </div>
    );
};

export default Time;