import footerBg from '../../assets/footer.jpg'
import map from '../../assets/map.png'
import { FaPhone, FaClock, FaPenToSquare, FaSquareInstagram, FaSquareXTwitter, FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <div className='flex justify-between' style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${footerBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: '90vh'
            }}>
                <div className='w-1/2 pt-12 pl-10'>
                    <h1 className='text-4xl font-bold text-white mb-16'><span className='underline text-green-600'>Khan</span> Real Estate</h1>
                    <p className='text-lg font-semibold text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod libero quo qui cumque dignissimos necessitatibus, itaque, saepe, sunt asperiores nisi tempore tempora porro accusantium exercitationem? Magnam, officia, nemo ad iste tenetur ab quo quod, quaerat sunt error esse assumenda.</p>
                    <div className='mt-16 px-8 space-y-2'>
                        <h3 className='text-lg font-bold text-gray-300 flex items-center gap-4'><FaPhone className='text-green-500' />Call us 1-800-555-1234</h3>
                        <h3 className='text-lg font-bold text-gray-300 flex items-center gap-4'><MdEmail className='text-green-500' />info@example.com</h3>
                        <h3 className='text-lg font-bold text-gray-300 flex items-center gap-4'><FaClock className='text-green-500' />Open House on the 24th, – 12 mid day to 5 pm.</h3>
                    </div>
                    <div className='flex items-center justify-center my-12 bg-green-600 hover:bg-green-700 w-2/6 py-3 gap-2 cursor-pointer'>
                        <h1 className='text-white font-bold text-lg'>Schedule A Visit</h1>
                        <FaPenToSquare className='text-white' />
                    </div>

                </div>
                <div className='relative w-1/2 flex justify-center items-center'>
                    <img className='w-3/4' src={map} alt="" />
                    <div className='absolute bottom-20 -left-20 p-9 bg-green-600 space-y-3'>
                        <h1 className='border-l-4 pl-4 border-black text-white font-bold text-2xl'>Office Address</h1>
                        <h1 className='text-white font-semibold text-base'>277 Bedford Ave, Brooklyn,<br />New York, USA</h1>
                    </div>
                </div>
            </div>
           <div className='flex justify-between items-center p-6 bg-black opacity-90'>
            <h1 className='w-2/3 text-white font-bold'>© Copyright 2023 All Rights Reserved</h1>
            <div className='w-1/6 flex justify-around'>
            <FaFacebook className='text-2xl text-green-600 cursor-pointer' />
            <FaSquareXTwitter className='text-2xl text-green-600 cursor-pointer' />
            <FaSquareInstagram className='text-2xl text-green-600 cursor-pointer' />
            </div>
           </div>
        </div>
    );
};

export default Footer;