import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#333335] border-trasnparent-200 dark:bg-trasnparent-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <rect width="48" height="20" y="14" fill="#d32f2f"></rect>
            <path fill="#fafafa" d="M40.383,18.916v-2.915h-8.111l-1.334,9.737l-1.32-9.737h-2.925l0.328,2.598	c-0.338-0.666-1.535-2.598-4.171-2.598c-0.017-0.001-2.929,0-2.929,0l-0.011,14.193l-2.132-14.193l-3.831-0.002l-2.205,14.706	l0.001-14.704H8.078l-1.322,8.26l-1.287-8.26H1.802v15.988H4.69v-7.706l1.314,7.706h1.535l1.295-7.706v7.706h5.567l0.338-2.46h2.241	l0.337,2.46l5.466,0.003h0.004v-0.003h0.003h0.003V26.8l0.67-0.098l1.387,5.291h0.003h2.82h0.003l-0.001-0.003h0.005h0.003	l-1.82-6.201c0.923-0.682,1.964-2.415,1.687-4.073v-0.001c0.003,0.022,1.718,10.285,1.718,10.285l3.362-0.01l2.298-14.492v14.492	h5.452v-2.875h-2.588v-3.667h2.588v-2.919h-2.588v-3.612H40.383z M15.079,26.994l0.793-6.835l0.823,6.835H15.079z M23.474,23.838	c-0.222,0.108-0.454,0.162-0.68,0.162v-5.143c0.004,0,0.008-0.001,0.014-0.001c0.226-0.001,1.912,0.068,1.912,2.544	C24.72,22.695,24.147,23.511,23.474,23.838"></path>
            <polygon fill="#fafafa" points="46.201,29.112 46.201,29.112 43.746,29.112 43.746,15.999 40.883,15.999 40.883,31.987 46.201,31.987"></polygon>
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" />
        </a>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black-100 rounded-lg bg-black-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#333335] dark:bg-black-800 md:dark:bg-black-900 dark:border-black-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white md:dark:text-red-500" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
