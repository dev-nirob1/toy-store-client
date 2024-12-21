import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Link} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const Banner = () => {
    const [sliderInfo, setSliderInfo] = useState([])
    useEffect(() => {
        fetch('https://toy-store-server-blond.vercel.app/sliderInfo')
            .then(res => res.json())
            .then(data => setSliderInfo(data))
    }, [])
    
    return (
        <div className='container mx-auto mt-16'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >

                {
                    sliderInfo.map((singleSlide, i) => <SwiperSlide key={i}>
                        <div className='relative w-full h-[500px] md:h-screen'>
                            <img className='w-full h-full' src={singleSlide.image} alt="banner image" />
                            <div className='absolute bg-gradient-to-b from-slate-600/50 via-slate-700/50 to-slate-600/50 h-full w-full top-0 left-0 text-white flex items-center px-9 md:pl-24 '>
                                <div data-aos="fade-up" data-aos-duration="1000" className='space-y-5 md:w-1/2'>
                                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-100'>{singleSlide.title}</h3>
                                    <p className='text-sm md:text-lg text-gray-200'>{singleSlide.description}</p>

                                    <Link className='btn btn-warning'>Exprole Our Collection</Link>
                     
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Banner;