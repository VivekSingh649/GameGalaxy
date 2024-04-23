import React from 'react'
function WhyChoose(props) {

    return (
        <section className="text-gray-600 body-font">
            <div className="max-w-screen-xl mx-auto px-5 default-padding">
                <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center mb-20"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">Security </span>Guidelines</h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex">
                        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow  ">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-indigo-500 mb-5 flex-shrink-0">
                                <i className="bi bi-bounding-box-circles text-3xl text-blue-700"></i>
                            </div>
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Need a help in Claim?</h5>
                            <p class="mb-3 font-normal text-gray-500 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            <a href="#!" onClick={props.onClick} class="inline-flex font-medium items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex">
                        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow  ">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-indigo-500 mb-5 flex-shrink-0">
                                <i className="bi bi-bounding-box-circles text-3xl text-blue-700"></i>
                            </div>
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Need a help in Claim?</h5>
                            <p class="mb-3 font-normal text-gray-500 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            <a href="#" onClick={props.onClick} class="inline-flex font-medium items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex">
                        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow  ">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-indigo-500 mb-5 flex-shrink-0">
                                <i className="bi bi-bounding-box-circles text-3xl text-blue-700"></i>
                            </div>
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Need a help in Claim?</h5>
                            <p class="mb-3 font-normal text-gray-500 ">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            <a href="#" onClick={props.onClick} class="inline-flex font-medium items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
