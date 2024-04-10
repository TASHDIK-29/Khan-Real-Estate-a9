import slider1 from '../../assets/slider1.jpg'


import 'animate.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';



const Banner = () => {



    return (
        <div>

            <Swiper
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}

            >
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center' style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slider1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: '80vh'
                    }}>
                        <div className='p-10 space-y-3 w-1/2 animate__animated animate__fadeInLeft'>
                            <h1 className='text-white font-bold text-xl'>Luxury House</h1>
                            <h1 className='text-white font-bold text-4xl border-l-2 animate__animated animate__fadeInLeft'>Luxury Residence Here</h1>
                            <p className='text-white font-semibold animate__animated animate__fadeInLeft'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui enim tempora quia ipsa repellendus, voluptates harum reprehenderit fugiat cupiditate quam id cumque at cum voluptatem!</p>
                            <button className='py-2 px-3 bg-green-500 rounded-lg text-white font-bold animate__animated animate__fadeInLeft'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center' style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slider1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: '80vh'
                    }}>
                        <div className='p-10 space-y-3 w-1/2 animate__animated animate__fadeInLeft'>
                            <h1 className='text-white font-bold text-xl'>Luxury House</h1>
                            <h1 className='text-white font-bold text-4xl border-l-2 animate__animated animate__fadeInLeft'>Luxury Residence Here</h1>
                            <p className='text-white font-semibold animate__animated animate__fadeInLeft'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui enim tempora quia ipsa repellendus, voluptates harum reprehenderit fugiat cupiditate quam id cumque at cum voluptatem!</p>
                            <button className='py-2 px-3 bg-green-500 rounded-lg text-white font-bold animate__animated animate__fadeInLeft'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center' style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slider1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: '80vh'
                    }}>
                        <div className='p-10 space-y-3 w-1/2 animate__animated animate__fadeInLeft'>
                            <h1 className='text-white font-bold text-xl'>Luxury House</h1>
                            <h1 className='text-white font-bold text-4xl border-l-2 animate__animated animate__fadeInLeft'>Luxury Residence Here</h1>
                            <p className='text-white font-semibold animate__animated animate__fadeInLeft'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui enim tempora quia ipsa repellendus, voluptates harum reprehenderit fugiat cupiditate quam id cumque at cum voluptatem!</p>
                            <button className='py-2 px-3 bg-green-500 rounded-lg text-white font-bold animate__animated animate__fadeInLeft'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            
        </div>
    );
};

export default Banner;