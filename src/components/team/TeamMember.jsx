import { useState } from "react";
import img2 from '../../assets/member2-1.jpg'
import 'animate.css';



import { FaSquareInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const TeamMember = () => {

    const [sidebar, setSidebar] = useState(false);
    const [count, setCount] = useState(0);

    const handleMouseEnter = (newCount) => {
        setSidebar(true);
        setCount(newCount);
    };

    const handleMouseLeave = () => {
        setSidebar(false);
    };


    return (
        <>
            <div className="text-center text-3xl font-bold mt-20 mb-12">
                <h1>Meet Our Team Members</h1>
            </div>
            <div className="mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-6">
                <div className="relative rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
                    onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}
                >
                    <img src={img2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-green-700 font-bold">Buying Agent</p>
                        </div>
                    </div>
                    {sidebar && count === 1 && <div className="absolute top-0 w-1/6 h-full flex flex-col items-center justify-around bg-gray-700/50 animate__animated animate__fadeInLeft delay-300">
                        <FaFacebookSquare className="text-2xl text-white cursor-pointer" />
                        <FaSquareInstagram className="text-2xl text-white cursor-pointer" />
                        <FaTwitter className="text-2xl text-white cursor-pointer" />
                        <IoMail className="text-2xl text-white cursor-pointer" />
                        <FaLinkedin className="text-2xl text-white cursor-pointer" />
                        <FaYoutube className="text-2xl text-white cursor-pointer" />

                    </div>}
                </div>
                <div className="relative max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
                    onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}
                >
                    <img src={img2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-green-700 font-bold">Buying Agent</p>
                        </div>
                    </div>
                    {sidebar && count === 2 && <div className="absolute top-0 w-1/6 h-full flex flex-col items-center justify-around bg-gray-700/50 animate__animated animate__fadeInLeft delay-300">
                        <FaFacebookSquare className="text-2xl text-white cursor-pointer" />
                        <FaSquareInstagram className="text-2xl text-white cursor-pointer" />
                        <FaTwitter className="text-2xl text-white cursor-pointer" />
                        <IoMail className="text-2xl text-white cursor-pointer" />
                        <FaLinkedin className="text-2xl text-white cursor-pointer" />
                        <FaYoutube className="text-2xl text-white cursor-pointer" />

                    </div>}
                </div>
                <div className="relative max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
                    onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}
                >
                    <img src={img2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-green-700 font-bold">Buying Agent</p>
                        </div>
                    </div>
                    {sidebar && count === 3 && <div className="absolute top-0 w-1/6 h-full flex flex-col items-center justify-around bg-gray-700/50  animate__animated animate__fadeInLeft delay-300">
                        <FaFacebookSquare className="text-2xl text-white cursor-pointer" />
                        <FaSquareInstagram className="text-2xl text-white cursor-pointer" />
                        <FaTwitter className="text-2xl text-white cursor-pointer" />
                        <IoMail className="text-2xl text-white cursor-pointer" />
                        <FaLinkedin className="text-2xl text-white cursor-pointer" />
                        <FaYoutube className="text-2xl text-white cursor-pointer" />

                    </div>}
                </div>
                <div className="relative max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
                    onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}
                >
                    <img src={img2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <p className="text-green-700 font-bold">Buying Agent</p>
                        </div>
                    </div>
                    {sidebar && count === 4 && <div className="absolute top-0 w-1/6 h-full flex flex-col items-center justify-around bg-gray-700/50 animate__animated animate__fadeInLeft delay-300">
                        <FaFacebookSquare className="text-2xl text-white cursor-pointer" />
                        <FaSquareInstagram className="text-2xl text-white cursor-pointer" />
                        <FaTwitter className="text-2xl text-white cursor-pointer" />
                        <IoMail className="text-2xl text-white cursor-pointer" />
                        <FaLinkedin className="text-2xl text-white cursor-pointer" />
                        <FaYoutube className="text-2xl text-white cursor-pointer" />

                    </div>}
                </div>
            </div>
        </>
    );
};

export default TeamMember;