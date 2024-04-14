import footerBg from '../../assets/footer.jpg'
import map from '../../assets/map.png'
import { FaPhone, FaClock, FaPenToSquare, FaSquareInstagram, FaSquareXTwitter, FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className='lg:flex justify-between footer-container p-2'>
                <div className='lg:w-1/2 pt-12 px-3 md:px-10'>
                    <h1 className='text-4xl font-bold text-white mb-16'><span className='underline text-green-600'>Khan</span> Real Estate</h1>
                    <p className='text-lg font-semibold text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod libero quo qui cumque dignissimos necessitatibus, itaque, saepe, sunt asperiores nisi tempore tempora porro accusantium exercitationem? Magnam, officia, nemo ad iste tenetur ab quo quod, quaerat sunt error esse assumenda.</p>
                    <div className='mt-16 px-8 space-y-2'>
                        <h3 className='text-lg font-bold text-gray-300 flex items-center gap-4'><FaPhone className='text-green-500' />Call us 1-800-555-1234</h3>
                        <h3 className='text-lg font-bold text-gray-300 flex items-center gap-4'><MdEmail className='text-green-500' />info@example.com</h3>
                        <h3 className='text-lg font-bold text-gray-300 flex items-center gap-4'><FaClock className='text-green-500' />Open House on the 24th, – 12 mid day to 5 pm.</h3>
                    </div>
                    <div className='flex items-center justify-center my-12 bg-green-600 hover:bg-green-700 w-2/3 md:w-1/3 lg:w-2/6 py-3 gap-2 cursor-pointer'>
                        <h1 className='text-white font-bold text-lg'>Schedule A Visit</h1>
                        <FaPenToSquare className='text-white' />
                    </div>

                </div>
                <div className='relative lg:w-1/2 flex justify-center items-center p-6 md:p-0'>
                    <img className='w-full md:w-3/4' src={map} alt="" />
                    <div className='absolute bottom-1 left-2 lg:bottom-20 lg:-left-20 p-4  md:p-9 bg-green-600 space-y-3'>
                        <h1 className='border-l-4 pl-4 border-black text-white font-bold text-lg md:text-2xl'>Office Address</h1>
                        <h1 className='text-white font-semibold text-sm md:text-base'>277 Bedford Ave, Brooklyn,<br />New York, USA</h1>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-between items-center p-6 bg-black opacity-90 space-y-2'>
                <h1 className='md:w-2/3 text-sm md:text-base text-white font-bold'>© Copyright 2023 All Rights Reserved</h1>
                <div className='md:w-1/6 flex justify-around'>
                    <FaFacebook className='text-2xl text-green-600 cursor-pointer' />
                    <FaSquareXTwitter className='text-2xl text-green-600 cursor-pointer' />
                    <FaSquareInstagram className='text-2xl text-green-600 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Footer;