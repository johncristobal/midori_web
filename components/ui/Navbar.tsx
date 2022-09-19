import React, { useState } from 'react'
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const { asPath, push } =  useRouter();

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">                
        <div className="flex flex-wrap items-center justify-between py-6">
            
            <div className="w-1/2 md:w-auto flex items-center">
                <img src="images/dog_dashboard.png" alt="" className="w-24 h-24 object-cover" />
                <a href="/" className="text-white font-bold font-nunito text-2xl">
                    Midori
                </a>
            </div>

            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block"><svg className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg></label>

            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:block w-full md:w-auto" id="menu">
                <nav
                    className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                    <ul className="md:flex items-center">
                    <li><a className="py-2 inline-block md:text-white md:hidden lg:block font-semibold font-nunito" href="#">¿Quiénes somos?</a></li>
                    <li className="md:ml-4"><a className="py-2 inline-block md:text-white md:px-2 font-semibold font-nunito" href="#">¿Cómo funciona?</a></li>
                    <li className="md:ml-4"><a className="py-2 inline-block md:text-white md:px-2 font-semibold font-nunito" href="#">Preguntas frecuentes</a></li>
                    {/* <li className="md:ml-4 md:hidden lg:block"><a className="py-2 inline-block md:text-white md:px-2 font-semibold"  href="#">Blog</a></li> */}
                    <li className="md:ml-4"><a className="py-2 inline-block md:text-white md:px-2 font-semibold font-nunito" href="/contacto">Contáctanos</a></li>
                    {/* <li className="md:ml-6 mt-3 md:mt-0">
                        <a className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded"
                        href="book-appointment.html">Book
                        Appointment</a>
                    </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    // <nav className="absolute top-0 left-0 w-full z-50 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    //     <div className="container flex flex-wrap justify-between items-center mx-auto">
    //         <a href="https://flowbite.com/" className="flex items-center">
    //             <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
    //             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    //         </a>
    //         <button onClick={() => setShowMenu(!showMenu)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    //             <span className="sr-only">Open main menu</span>
    //             <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //         </button>
    //         <div className={`${showMenu ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
    //         <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

    //             <li>
    //             <a href="/" className={`block py-2 pr-4 pl-3 ${(asPath === '/') ? 'text-white bg-blue-700' : 'text-gray-700 hover:bg-gray-100'} rounded md:bg-transparent ${(asPath === '/') ? 'md:text-blue-700' : 'md:text-gray-700'} md:p-0 dark:text-white`}>Home</a>
    //             </li>
    //             <li>
    //             <a href="/contacto" className={`block py-2 pr-4 pl-3 rounded ${(asPath === '/contacto') ? 'text-white bg-blue-700' : 'text-gray-700 hover:bg-gray-100'} md:bg-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ${(asPath === '/contacto') ? 'md:text-blue-700' : 'md:text-gray-700'} md:p-0`}>About</a>
    //             </li>
    //             <li>
    //             <a href="/contacto" className={`block py-2 pr-4 pl-3 rounded ${(asPath === '/contacto') ? 'text-white bg-blue-700' : 'text-gray-700 hover:bg-gray-100'} md:bg-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ${(asPath === '/contacto') ? 'md:text-blue-700' : 'md:text-gray-700'} md:p-0`}>Services</a>
    //             </li>
    //             <li>
    //             <a href="/contacto" className={`block py-2 pr-4 pl-3 rounded ${(asPath === '/contacto') ? 'text-white bg-blue-700' : 'text-gray-700 hover:bg-gray-100'} md:bg-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ${(asPath === '/contacto') ? 'md:text-blue-700' : 'md:text-gray-700'} md:p-0`}>Pricing</a>
    //             </li>
    //             <li>
    //             <a href="/contacto" className={`block py-2 pr-4 pl-3 rounded ${(asPath === '/contacto') ? 'text-white bg-blue-700' : 'text-gray-700 hover:bg-gray-100'} md:bg-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ${(asPath === '/contacto') ? 'md:text-blue-700' : 'md:text-gray-700'} md:p-0`}>Contact</a>
    //             </li>
    //         </ul>
    //         </div>
    //     </div>
    // </nav>
  )
}

export default Navbar