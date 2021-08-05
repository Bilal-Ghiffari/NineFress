import React from 'react'
import Navbar from 'Parts/navbar'
import './about.css';
import AsideMenu from 'Parts/AsideMenu';

const AboutUs = () => {
    return (  
        <>
        <Navbar />
        <div class="MaskImage">
          <img src="images/static/wave team.png" alt="TeamWork" max-width="100%" class="object-cover w-full"/>
        </div>

        <div class="grid grid-row-2 max-w-screen-lg md:m-auto">
            <div class="m-5 ">
                <h1 class="text-7xl font-medium text-center">About our community</h1>
            </div>
            <div class="grid grid-cols-1 block md:grid-cols-2 m-10">
                <div class="block m-5">
                        <h1 class="text-5xl font-bold my-3 text-center md:text-left">Title</h1>
                        <p class="text-xl text-justify text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                </div>
                <div class="block m-5">
                        <h1 class="text-5xl font-bold my-3 text-center md:text-left">Title</h1>
                        <p class="text-xl text-justify text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                </div>
            </div>
        </div>

        <div class="max-w-screen-lg m-auto">

            <div class="grid grid-row-3 m-5 ">
                <h1 class="text-6xl block font-bold my-5 text-center">Work with us</h1>
                <div class="m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                </div>
                <p class="text-xl text-center m-8 text-gray-500 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <br/>
        </div>

        <div class="bg-gray-100">
            <h1 class="text-3xl block font-bold text-center z-10">Creative team & conducive environment </h1>
            <div class="max-w-screen-lg m-auto">
                <svg viewBox="0 0 200 200" s class="-z-10" title="Blob">
                        <path class="" fill="#FF0066"
                            d="M57.3,-47C72.1,-27.2,80.5,-3.4,74.4,14.5C68.4,32.5,47.9,44.8,27.2,53.7C6.5,62.6,-14.5,68.1,-33.2,61.8C-52,55.5,-68.6,37.5,-75.1,15.4C-81.5,-6.7,-77.8,-32.9,-63.6,-52.6C-49.4,-72.3,-24.7,-85.5,-1.7,-84.1C21.3,-82.7,42.5,-66.8,57.3,-47Z"
                            transform="translate(100 100)" />
                </svg>
            </div>
        </div>

        <section class="grid grid-row-2 max-w-screen-lg m-auto ">
            <br/>
            <h1 class="text-6xl block font-bold my-5 text-center">Our team</h1>
            <div class="m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <br/><br/>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <header class="grid m-3 ">
                        <img src="images/static/1.png" alt="first" width="70%" class="m-auto" />
                        <h2 class="text-3xl block font-medium my-5 text-center">Daffa</h2>
                        <p class="text-lg text-center p-3 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.</p>
                </header>
                <header class="grid m-3 ">
                        <img src="images/static/2.png" alt="2nd" width="70%" class="m-auto" />
                        <h2 class="text-3xl block font-medium my-5 text-center">Bilal</h2>
                        <p class="text-lg text-center p-3 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.</p>
                </header>
                <header class="grid m-3 ">
                        <img src="images/static/3.png" alt="3rd" width="70%" class="m-auto" />
                        <h2 class="text-3xl block font-medium my-5 text-center">Alexander</h2>
                        <p class="text-lg text-center p-3 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.</p>
                </header>
            </div>
            <br/><br/>
        </section>

        <div class="p-5 bg-gray-100" alt="Work as Merchant">
            <section class="max-w-screen-lg m-auto grid grid-cols-1 md:grid-cols-2">
                <div class="">
                        <h1 class="text-6xl block font-bold my-5 text-center">Join as Merchant</h1>
                        <br/><br/><br/>
                        <img src="images/static/merch_1.png" alt="Merchant" class=""/>
                </div>
                <article class="flex flex-col place-content-center p-5">
                        <p class="text-xl m-8 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button type="button" name="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Sign here
                        </button>
                </article>
            </section>
            <br/>

        </div>
        <AsideMenu />
        </>
    );
}
 
export default AboutUs;