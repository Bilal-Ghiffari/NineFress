import React from 'react'
import Navbar from 'Parts/navbar'
import './about.css';
import AsideMenu from 'Parts/AsideMenu';

const Under = () => {
    return (  
        <>
        <Navbar />
        <main class="flex h-screen">

          <div class="flex flex-col m-auto">
               <img src="images/static/UnderC.gif" alt="Under Construction" width="700px" class="" />
               <div class="m-5">
                    <h1 class="text-xl md:text-4xl font-semibold text-center text-green-600">Coming Soon 👷‍♂️👷‍♀️</h1>
                    <h2 class="text-xl md:text-2xl font-semibold mt-3 md:mt-5 text-center text-green-600">Our Website is Under Construct</h2>
               </div>
               <h3 class="text-xl font-semibold mt-5 text-green-600">or you can browse for our another product...</h3>
               <br />
               <div class="bg-white shadow p-4 flex">
                    <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                    </span>
                    <input class="w-full rounded p-2" type="text" placeholder="Bumbu Nasi goreng..." />
                    <button class="bg-green-600 hover:bg-green-600 rounded text-white p-2 pl-4 pr-4">
                         <p class="font-semibold text-xs">Search</p>
                    </button>
               </div>
          </div>
        </main>
        <AsideMenu />
        </>
    );
}
 
export default Under;