import React from 'react'
import Navbar from 'Parts/navbar'
import "./contact.css";
// import opening from "./Opening.svg";
import AsideMenu from 'Parts/AsideMenu';

const Contact = () => {
    return (
        <>
        <Navbar />
        <main class="">
            <div class="relative">
                {/* <img src={opening} alt="Header" /> */}
                <svg viewBox="0 0 1920 740">
                    <defs>
                    </defs>
                    <polygon fill="#458768" class="cls-1" points="1920 403 0 740 0 0 1920 0 1920 403"/>
                </svg>
            </div>

            <section class="grid grid-row-2 max-w-screen-lg absolute inset-x-0 top-0 m-auto ">
                <br/><br/><br/>
                <h1 class="text-5xl font-bold m-3 text-center md:text-left text-white">Get In Touch</h1>
                <h2 class="text-xl font-normal m-3 text-gray-300 block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
            </section>

        </main>

        <div class="container mx-auto transform -translate-y-80">
            <div class="flex justify-center px-6 my-12">
                <div class="w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl">
                    <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg yo"></div>
                    <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="pt-4 text-2xl text-center">Send Us a message</h3>
                            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                                First Name
                                        </label>
                                        <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                                Last Name
                                        </label>
                                        <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Email
                                    </label>
                                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Phone Number
                                    </label>
                                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="Phone" type="Phone" placeholder="+62 8137-7889-1264" />
                                </div>
                                <textarea class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" id="message"
                                    type="text" placeholder="Message..."></textarea>
                                <label for="message" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                                    Message...
                                </label>
                                <div class="mb-6 text-center">
                                    <button class="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline" type="button">
                                        Submit
                                    </button>
                                </div>
                                <hr class="mb-6 border-t" />
                            </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-200">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="m-5" alt="map Location place-content-center">
                    <a href="https://www.google.com/maps/place/Paramadina+University/@-6.241133,106.8308091,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f3c398b48d51:0x2a232e58c9357e8f!8m2!3d-6.241133!4d106.8329978" target="_blank" rel="noopener noreferrer">
                    <img src="images/static/Location_g.png" alt="Location" width="100%" class="m-auto self-center" />
                    </a>
                </div>

                <div class="m-5">
                    <h1 class="text-5xl font-bold py-5 text-black">Our location</h1>
                    <br/>
                    <h1 class="text-2xl font-bold text-gray-700">location</h1>
                    <p class="text-base block">
                            Jln. Gatot Subroto, Kecamatan Mampang Prapatan, Jakarta Selatan
                    </p>
                    <br/>
                    <h1 class="text-2xl font-bold text-gray-700">Phone Number</h1>
                    <p class="text-base">
                            0813-8884-5012
                    </p>
                    <br/>
                    <h1 class="text-2xl font-bold text-gray-700">Email</h1>
                    <p class="text-base">
                            HackDay@gmail.com
                    </p>
                </div>

            </div>
            <br/>
        </div>
        <AsideMenu />
        </>
    );
}

export default Contact;
