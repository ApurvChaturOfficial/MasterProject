import React from 'react'
import './index.css';
import AVATAR1 from '../../../../hAssets/avatar1.jpg'
import AVATAR2 from '../../../../hAssets/avatar2.jpg'
import AVATAR3 from '../../../../hAssets/avatar3.jpg'
import AVATAR4 from '../../../../hAssets/avatar4.jpg'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
    return (
        <section id='testimonial'>
            <h5>Review from clients</h5>
            <h2>Testimonial</h2>

            <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className='container testimonial__container'
             >
                <SwiperSlide className='testimonial' >
                    <div className='client__avatar'>
                        <img src={AVATAR1} alt="Avatar" />
                    </div>
                    <h5 className='client__name' >Brian Kates</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad quod doloremque. Optio delectus magnam accusamus impedit obcaecati dolorem hic quam dolorum, sunt fugit sed voluptates! Temporibus maiores sed fuga!
                    </small>
                </SwiperSlide>
                
                <SwiperSlide className='testimonial' >
                    <div className='client__avatar'>
                        <img src={AVATAR2} alt="Avatar" />
                    </div>
                    <h5 className='client__name' >Brian Kates</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad quod doloremque. Optio delectus magnam accusamus impedit obcaecati dolorem hic quam dolorum, sunt fugit sed voluptates! Temporibus maiores sed fuga!
                    </small>
                </SwiperSlide>
                
                <SwiperSlide className='testimonial' >
                    <div className='client__avatar'>
                        <img src={AVATAR3} alt="Avatar" />
                    </div>
                    <h5 className='client__name' >Brian Kates</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad quod doloremque. Optio delectus magnam accusamus impedit obcaecati dolorem hic quam dolorum, sunt fugit sed voluptates! Temporibus maiores sed fuga!
                    </small>
                </SwiperSlide>
                
                <SwiperSlide className='testimonial' >
                    <div className='client__avatar'>
                        <img src={AVATAR4} alt="Avatar" />
                    </div>
                    <h5 className='client__name' >Brian Kates</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad quod doloremque. Optio delectus magnam accusamus impedit obcaecati dolorem hic quam dolorum, sunt fugit sed voluptates! Temporibus maiores sed fuga!
                    </small>
                </SwiperSlide>
                
            </Swiper>
        </section>
    )
}

export default Testimonial