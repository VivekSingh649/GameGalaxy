import React from 'react'
import pictures from '../assets/assets'

function Footer(props) {
    return (
        <footer className="text-gray-600 body-font bg-gray-50">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={pictures.logo2} className="h-8" alt="Flowbite Logo" />
                    <span>GameGalaxy</span>
                </a>
                <p className="text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 GameGalaxy —
                    <a href="https://intelnetit.com" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Intelnet</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="#!" className="text-gray-600 mr-3" rel="noopener noreferrer" onClick={props.onClick}>Privacy Policy</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
