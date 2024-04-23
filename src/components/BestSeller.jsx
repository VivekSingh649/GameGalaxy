import React, { useRef, useState } from 'react';
import GameCard from './GameCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function BestSeller() {

    const Cards = [
        <GameCard
            gameName="Game 1"
            gameDes="Game 1"
        />,
        <GameCard
            gameName="Game 1"
            gameDes="Game 1"
        />,
        <GameCard
            gameName="Game 1"
            gameDes="Game 1"
        />,
        <GameCard
            gameName="Game 1"
            gameDes="Game 1"
        />,
        <GameCard
            gameName="Game 1"
            gameDes="Game 1"
        />,
    ]

    return (
        <>
            <section className="default-padding bg-gray-50 px-5 mx-auto">
                <div className="max-w-screen-xl mx-auto">
                    <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center mb-20"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">Populars</span> Games</h1>
                    <Swiper
                        navigation={true}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 1.5,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {Cards.map((slide, index) =>
                            <SwiperSlide key={index}>
                                {slide}
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </section>
        </>
    );
}