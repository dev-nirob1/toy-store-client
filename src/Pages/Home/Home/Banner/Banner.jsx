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
    const [sliderInfo, setSliderInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/sliderInfo')
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
                    sliderInfo.map((singleSlide, i) => <SwiperSlide key={i}>
                        <div className='relative w-full h-[500px] md:h-screen'>
                            <img className='w-full h-full' src={singleSlide.image} alt="banner image" />
                            <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full top-0 left-0 text-white flex items-center px-9 md:pl-24 '>
                                <div data-aos="fade-up" data-aos-duration="1000" className='space-y-5 md:w-1/2'>
                                    <h3 className='text-4xl md:text-5xl font-semibold text-gray-100'>{singleSlide.title}</h3>
                                    <p className='text-base md:text-lg text-gray-100'>{singleSlide.description}</p>

                                    <button className='btn btn-primary mr-5'>{singleSlide.buttonText}</button>
                                    <button className='btn btn-warning'>{singleSlide.buttonLink}</button>
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