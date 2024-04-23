import React, { useRef, useState } from 'react';
import GameCard from './GameCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import pictures from '../assets/assets';

export default function BestSeller() {

    const Cards = [
        <GameCard
            img={pictures.Rummmy635}
            gameName="Rummy 365"
            gameDes="We offer fair play to all our rummy players with our Random Number Generator (RNG) that has been evaluated and verified by iTech Labs, a world-class leading authority for RNG verification."
        />,
        <GameCard
            gameName="Hunter Assassin"
            gameDes="Hunter Assassin is a stealthy and strategic social deduction game wherein you play as a hunter with a deadly knife. You have to hide from enemies and kill them."
            img={pictures.hunterAssian}
        />,
        <GameCard
            gameName="777 Game"
            gameDes="This is a classic online casino game inspired by vintage slot machines. It features vibrant graphics and traditional symbols like cherries, bars, and sevens."
            img={pictures.T777}
        />,
        <GameCard
            gameName="Subway Princess Runner"
            gameDes="It is a Subway Surfer clone which means you run endlessly avoiding obstacles on the way and collecting rewards on the way."
            img={pictures.SubwayPrincess}
        />,
    ]

    return (
        <>
            <section className="default-padding bg-gray-50 px-5 mx-auto">
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center mb-20"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">Populars</span> Games</h1>
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