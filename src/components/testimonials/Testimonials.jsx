import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar5.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni amet laudantium iure provident tempore ex molestiae cumque magnam reprehenderit natus praesentium voluptatibus harum animi, ipsam odit recusandae repellendus, autem facere!'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni amet laudantium iure provident tempore ex molestiae cumque magnam reprehenderit natus praesentium voluptatibus harum animi, ipsam odit recusandae repellendus, autem facere!'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni amet laudantium iure provident tempore ex molestiae cumque magnam reprehenderit natus praesentium voluptatibus harum animi, ipsam odit recusandae repellendus, autem facere!'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni amet laudantium iure provident tempore ex molestiae cumque magnam reprehenderit natus praesentium voluptatibus harum animi, ipsam odit recusandae repellendus, autem facere!'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
          id='testimonials'
          // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({avatar, name, review}, index)=>{
          return( 
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
             )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials