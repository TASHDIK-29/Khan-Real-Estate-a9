import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from 'react-hot-toast';

import 'animate.css';
import { getStoredData, saveStoredData } from '../../utils/storage';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';


const DetailCard = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const navigate = useNavigate();


    const { id } = useParams();
    const data = useLoaderData();

    // console.log(typeof id, data)

    const item = data.find(d => d.id === parseInt(id));
    console.log(item);


    const { facilities, location, area, status, price, description, segment_name, estate_title, image, building_year, owner, interior } = item;

    const handelBookmark = data =>{
        const storedData = getStoredData();
        const isExist = storedData.find(i => i.id === data.id);
        if(!isExist){
            saveStoredData(data);
        }
        else{
            toast.error('Already Bookmarked');
        }
    }


    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
                <title>{estate_title} | Khan Real Estate</title>
            </Helmet>
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded ">
                <img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 animate__animated animate__zoomIn" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50 animate__animated animate__fadeInRight">
                    <div className='md:flex justify-between p-2 bg-black text-white font-bold'>
                        <h1 className='flex gap-2 items-center'><FaTags />{segment_name}</h1>
                        <h5 className='flex gap-2 items-center'><FaCalendarAlt />Build in {building_year}</h5>
                        <h3 className='text-orange-700'>{price}</h3>
                    </div>
                    <div className="space-y-2 animate__animated animate__fadeInRight">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{estate_title}</a>
                        <h5 className='flex gap-2 items-center text-lg font-semibold'><FaBuildingUser className='text-2xl' />{owner}</h5>
                        <p className="text-lg dark:text-gray-600 flex gap-2 items-center"><FaLocationDot />
                            <a rel="noopener noreferrer" href="#" className="text-lg hover:underline">{location}</a>
                        </p>
                    </div>
                    <div>
                        <h1 className='text-xl text-start font-bold underline'>Facilities</h1>
                        <div className='text-start animate__animated animate__fadeInRight'>
                            {
                                facilities.map(i => <li key={i}>{i}</li>)
                            }
                        </div>
                    </div>
                    <div className="dark:text-gray-800 animate__animated animate__fadeInRight">
                        <p>{description}</p>
                    </div>
                    <div className='flex justify-between bg-gray-400/25 p-2'>
                        <div className='flex justify-between w-1/2'>
                            <h1 className='flex gap-1 items-center text-base font-semibold'><IoBedOutline />{interior.bedrooms}</h1>
                            <h1 className='flex gap-1 items-center text-base font-semibold'><MdOutlineBathtub />{interior.bathrooms}</h1>
                            <h1 className='flex gap-1 items-center text-base font-semibold'><MdBalcony />{interior.balcony}</h1>
                        </div>
                        <div>
                            <h5 className='flex gap-2 items-center'><FaHouse />{area}</h5>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <button onClick={() => navigate(-1)} className='flex gap-1 items-center text-green-500 font-bold'><FaArrowLeft />Go Back</button>
                    

                    <button onClick={() => handelBookmark(item)} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Bookmark</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;