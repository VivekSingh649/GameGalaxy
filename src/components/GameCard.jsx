import React from 'react'

function GameCard(props) {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
                <div className="relative h-[300px]">
                    <img className="z-0 h-full w-full object-cover" src={props.img} alt="" />
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{props.gameName} <br /> <span className='text-sm font-semibold text-gray-700'>Play on (Damangames)</span></h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.gameDes}</p>
                    <a href="https://damangames.in/#/register?invitationCode=485767061548" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Play Now
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default GameCard
