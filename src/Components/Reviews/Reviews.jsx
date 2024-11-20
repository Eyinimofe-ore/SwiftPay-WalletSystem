import React from 'react'
import './Reviews.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import user from '../../Assets/Images/user.png'

function Reviews() {
  return (
    <div>
         <div className='section__container'>
            <h1>What Are People Saying About Us</h1> 
            <div className='section'>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Excellent Designs</h4>
          <p>
            Efficient, reliable, and results-oriented. Visually appealing
            website, improved online visibility. Highly recommended!
          </p>
          <img src={user} alt="user" />
          <h5>Tanya Grant</h5>
          <h6>Ceo & Founder</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Excellent Designs</h4>
          <p>
            Efficient, reliable, and results-oriented. Visually appealing
            website, improved online visibility. Highly recommended!
          </p>
          <img src={user} alt="user" />
          <h5>Tanya Grant</h5>
          <h6>Ceo & Founder</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Excellent Designs</h4>
          <p>
            Efficient, reliable, and results-oriented. Visually appealing
            website, improved online visibility. Highly recommended!
          </p>
          <img src={user} alt="user" />
          <h5>Tanya Grant</h5>
          <h6>Ceo & Founder</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Excellent Designs</h4>
          <p>
            Efficient, reliable, and results-oriented. Visually appealing
            website, improved online visibility. Highly recommended!
          </p>
          <img src={user} alt="user" />
          <h5>Tanya Grant</h5>
          <h6>Ceo & Founder</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Excellent Designs</h4>
          <p>
            Efficient, reliable, and results-oriented. Visually appealing
            website, improved online visibility. Highly recommended!
          </p>
          <img src={user} alt="user" />
          <h5>Tanya Grant</h5>
          <h6>Ceo & Founder</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Excellent Designs</h4>
          <p>
            Efficient, reliable, and results-oriented. Visually appealing
            website, improved online visibility. Highly recommended!
          </p>
          <img src={user} alt="user" />
          <h5>Tanya Grant</h5>
          <h6>Ceo & Founder</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="section__card">
          <span><i className="ri-double-quotes-l"></i></span>
          <h4>Excellent Designs</h4>
          <p>
            Efficient, reliable, and results-oriented. Visually appealing
            website, improved online visibility. Highly recommended!
          </p>
          <img src={user} alt="user" />
          <h5>Tanya Grant</h5>
          <h6>Ceo & Founder</h6>
        </div>
        </SwiperSlide>
        
      </Swiper>    
            </div>  

            
            
            
        </div>




      
    </div>
  )
}

export default Reviews
