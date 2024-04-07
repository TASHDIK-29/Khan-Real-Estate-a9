import img from '../../assets/slider1.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";


const Card = ({ item }) => {
    console.log(item)
    const { facilities, location, area, status, price, description, segment_name, estate_title, image, id } = item;
    return (
        <div className="rounded-md shadow-md flex flex-col">
            <div className='relative'>
                <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <h1 className='text-white font-bold absolute top-0 right-0 bg-green-500 p-2 opacity-80 rounded-bl-xl'>{status}</h1>
                <h1 className='text-white font-bold absolute top-0 left-0 bg-green-500 p-2 opacity-80 rounded-br-xl'>Hot Offer</h1>
            </div>
            <div className='flex justify-between p-2 bg-black text-white font-bold'>
                <h1 className='flex gap-2 items-center'><FaTags />{segment_name}</h1>
                <h5 className='flex gap-2 items-center'><FaHouse />{area}</h5>
                <h3>{price}</h3>
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8 flex-grow">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{estate_title}</h2>
                    <h3 className='text-green-600 flex gap-2 justify-center items-center text-xl'><FaLocationDot /> {location}</h3>
                    <div>
                        <h1 className='text-xl text-start font-bold underline'>Facilities</h1>
                        <div className='text-start'>
                            {
                                facilities.map(i => <li key={i}>{i}</li>)
                            }
                        </div>
                    </div>
                    <p className="dark:text-gray-800">{description}</p>
                </div>

            </div>
            <div className='p-6'>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-600 text-white font-bold">View Property</button>
            </div>
        </div>
    );
};

export default Card;