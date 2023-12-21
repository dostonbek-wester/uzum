import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import rasm from '../../assets/banner.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';

// import required modules
import { Navigation } from 'swiper/modules';
import MAINPAGE from '../../data/main';

export default function MainSwiper({item}) {
  let swiperdata = MAINPAGE.data.main.content[1].content
  console.log("swiper",swiperdata)
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {
        swiperdata.map((item,index)=>(
          <SwiperSlide key={index}>
            <img className='banner-img' src={item.image.high} alt="" />
          </SwiperSlide>
        ))
      }
      </Swiper>
    </>
  );
}
