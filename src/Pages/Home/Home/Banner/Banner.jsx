import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const Banner = () => {
    const [siderInfo, setSliderInfo] = useState([])
    useEffect(() => {
        fetch('sliderinfo.json')
            .then(res => res.json())
            .then(data => setSliderInfo(data))
    }, [])
    return (
        <div className='container mx-auto my-10'>
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
                    siderInfo.map((singleSlide, i) => <SwiperSlide key={i}>
                        <div className='relative w-full'>
                            <img className='w-full h-screen' src={singleSlide.image} alt="banner image" />
                            <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full top-0 left-0 text-white flex items-center pl-24'>
                                <div data-aos="fade-up" data-aos-duration="1000" className='space-y-5 w-1/2'>
                                    <h3 className='text-5xl font-semibold text-gray-100'>{singleSlide.title}</h3>
                                    <p className='text-lg text-gray-100'>{singleSlide.description}</p>

                                    <button className='btn btn-primary mr-5'>{singleSlide.buttonText}</button>
                                    <button className='btn btn-warning'>{singleSlide.buttonLink}</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }


                {/* <SwiperSlide>
                    <img className='w-full h-screen' src="https://images.unsplash.com/photo-1531693251400-38df35776dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-screen' src="https://images.unsplash.com/photo-1594787317357-dcda50fd1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-screen' src="https://images.unsplash.com/photo-1587292818536-5a404595dd36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1646&q=80" alt="" />
                </SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default Banner;