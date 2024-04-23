import React from 'react'

function HeroSlide(props) {
    return (
        <section className="text-gray-600 body-font"
            style={{
                backgroundImage: `url("${props.backgroundImage}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
            <div className="max-w-screen-xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center hero_content">
                    <h1 className="title-font sm:text-4xl md:text-6xl mb-4 text-white">{props.heroTitle}
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed text-xl font-semibold text-white">{props.heroSubTitle}</p>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <i className="bi bi-controller mr-2"></i>
                            {props.btn}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSlide
