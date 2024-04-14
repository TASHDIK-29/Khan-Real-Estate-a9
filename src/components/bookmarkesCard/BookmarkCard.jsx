import img from '../../assets/slider1.jpg'
import { FaTags } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { Link } from 'react-router-dom';


const BookmarkCard = ({ item }) => {

    const { facilities, location, interior, area, status, price, description, segment_name, estate_title, image, id } = item;

    return (
        <Link to = {`/detail/${id}`}>
            <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 flex flex-col">
                <div className='relative'>
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <h1 className='text-white font-bold absolute top-0 right-0 bg-green-500 p-2 opacity-80 rounded-bl-xl'>{status}</h1>
                    <h1 className='text-white font-bold absolute top-0 left-0 bg-green-500 p-2 opacity-80 rounded-br-xl'>Hot Offer</h1>
                </div>
                <div className='flex flex-col md:flex-row justify-between p-2 bg-black text-white font-bold flex-grow'>
                    <h1 className='flex gap-2 items-center'><FaTags />{segment_name}</h1>
                    <h5 className='flex gap-2 items-center'><FaHouse />{area}</h5>
                    <h3 className='text-orange-700'>{price}</h3>
                </div>
                <div className='flex justify-between bg-gray-400/25 p-2'>
                    <h1 className='flex gap-1 items-center text-base font-semibold'><IoBedOutline />{interior.bedrooms}</h1>
                    <h1 className='flex gap-1 items-center text-base font-semibold'><MdOutlineBathtub />{interior.bathrooms}</h1>
                    <h1 className='flex gap-1 items-center text-base font-semibold'><MdBalcony />{interior.balcony}</h1>
                </div>
                {/* <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                        <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                </div> */}
            </div>
        </Link>
    );
};

export default BookmarkCard;