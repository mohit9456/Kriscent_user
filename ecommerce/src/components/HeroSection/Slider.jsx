import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-100">
                        <div className="">
                            <img style={{width: '100%', height: '60vh'}} src="https://www.softwarecreatives.com/assets/images/ibg/in-img-5.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100">
                        <div className="w-100">
                            <img style={{width: '100%', height: '60vh'}} src="https://ithinkbigger.com/wp-content/uploads/2022/03/eCommerce-Website-Components-photo.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100">
                        <div className="w-100">
                            <img style={{width: '100%', height: '60vh'}} src="https://www.softwarecreatives.com/assets/images/ibg/in-img-5.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100">
                        <div className="w-100">
                            <img style={{width: '100%', height: '60vh'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuOusuhLv5jR-_pxeelYlPKX5pgoclzUowYmqHGVweXSWflWta2UL62NMu_4h7znH1Z8&usqp=CAU" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
