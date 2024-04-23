import React from 'react'
import pictures from '../assets/assets'

function MostPopular() {
    return (
        <>
            <section className="default-padding px-5">
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center mb-20"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">Trending</span> Games</h1>
                    <div className="grid_container">
                        <div className="space-y-8">
                            <div className="relative rounded-md h-[300px] md:h-auto">
                                <img
                                    src={pictures.OneShotFishing}
                                    alt="AirMax Pro"
                                    className="z-0 h-full w-full rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left p-4">
                                    <h1 className="text-lg font-semibold text-white">One Shot Fishing</h1>
                                    <p className="mt-2 text-sm text-gray-300">
                                        One Shot Fishing is a unique arcade game in terms of rewards and visual appearance. The portrait mode is handy and allows players to enjoy the game on the go.
                                    </p>
                                    <a href="https://damangames.in/#/" className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Play Now<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a>
                                </div>
                            </div>
                            <div className="relative rounded-md h-[300px] md:h-auto">
                                <img
                                    src={pictures.CarromPool}
                                    alt="AirMax Pro"
                                    className="z-0 h-full w-full rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left p-3">
                                    <h1 className="text-lg font-semibold text-white">Carrom Pool</h1>
                                    <p className="mt-2 text-sm text-gray-300">
                                        Carrom Pool is an easy-to-play multiplayer board game. Pot all your pieces before your opponent. Can you become the best at this Carrom Board game?
                                    </p>
                                    <a href="https://damangames.in/#/" className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Play Now<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="relative rounded-md h-[300px] md:h-auto">
                                <img
                                    src={pictures.cricektLegue}
                                    alt="AirMax Pro"
                                    className="z-0 h-full w-full rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left p-3">
                                    <h1 className="text-lg font-semibold text-white">Cricket League</h1>
                                    <p className="mt-2 text-sm text-gray-300">
                                        Cricket League is a casual cricket game for Android phones. It has semi-realistic graphics but you may be hooked into playing it because of its gameplay physics.
                                    </p>
                                    <a href="https://damangames.in/#/" className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Play Now<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a>
                                </div>
                            </div>
                            <div className="relative rounded-md h-[300px] md:h-auto">
                                <img
                                    src={pictures.moneyComming}
                                    alt="AirMax Pro"
                                    className="z-0 h-full w-full rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left p-3">
                                    <h1 className="text-lg font-semibold text-white">Money Coming</h1>
                                    <p className="mt-2 text-sm text-gray-300">
                                        Enjoy the amazing Money Coming Slot experience! Have fun and feel the true thrills to hit the jackpot!
                                    </p>
                                    <a href="https://damangames.in/#/" className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Play Now<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a>
                                </div>
                            </div>
                            <div className="relative rounded-md h-[300px]">
                                <img
                                    src={pictures.MountainClimb}
                                    alt="AirMax Pro"
                                    className="z-0 h-full w-full rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left">
                                    <h1 className="text-lg font-semibold text-white">Mountain Climb</h1>
                                    <p className="mt-2 text-sm text-gray-300">
                                        As it is given in the name, this is a stunt-driving game. So, expect tough terrains, challenging game modes and goals.
                                    </p>
                                    <a href="https://damangames.in/#/" className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Play Now<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MostPopular
