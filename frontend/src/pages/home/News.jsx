import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import news1 from "../../assets/news/news-1.jpeg"
import news2 from "../../assets/news/news-2.jpeg"
import news3 from "../../assets/news/news-3.jpeg"
import news4 from "../../assets/news/news-4.jpeg"
import news5 from "../../assets/news/news-5.jpeg"

import { Link } from 'react-router-dom';

const news = [
    {
        "id": 1,
        "title": "New Illustrated Edition of 'Harry Potter and the Goblet of Fire' Announced",
        "description": "Scholastic is set to release an illustrated and interactive edition of J.K. Rowling's 'Harry Potter and the Goblet of Fire' this fall.",
        "image": news1
    },
    {
        "id": 2,
        "title": "New Book Explores Peter Manfredonia's Crime Spree",
        "description": "First He Killed the Minuteman' by Cynthia Herbert-Bruschi Adams delves into the 2020 violent crime spree of Peter Manfredonia in Connecticut.",
        "image": news2
    },
    {
        "id": 3,
        "title": "Top Paperback Picks for February 2025",
        "description": "The Times has curated a list of the best paperback books for February 2025, featuring a range of genres from translated fiction and crime stories to wartime histories and memoirs.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Pathfinder Community Library Features 'The Last Lifeboat",
        "description": "The Pathfinder Community Library in Baldwin has selected 'The Last Lifeboat' by Hazel Gaynor as its Book of the Week.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Sonu Bhasin Wins Gaja Capital Business Book Prize 2024",
        "description": "Sonu Bhasin's biography, 'Entrepreneurs Who Built India: Lala Shri Ram,' has been awarded the 2024 Gaja Capital Business Book Prize, which includes a ₹20 lakh reward.",
        "image": news5
    }
]

const News = () => {
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>News </h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            news.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                        {/* content */}
                        <div className='py-4'>
                            <Link to="/">
                                 <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                            </Link>
                            <div className='w-12 h-[4px] bg-primary mb-5'></div>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>

                        <div className='flex-shrink-0'>
                            <img src={item.image} alt=""  className='w-full object-cover'/>
                        </div>
                    </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
    </div>
  )
}

export default News