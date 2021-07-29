import React from 'react'

export default function Hero() {
    return (
        <section className="flex items-center hero">
            <div className="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center md:mt-14 hero-caption">
                <h1 className="text-5xl md:text-4xl leading-tight font-semibold capitalize md:text-green-500 text-black font-big">
                    Discover new amazing grocery deals
                </h1>
                <h2 className="px-8 text-base md:px-0 md:text-2xl my-6 tracking-wide md:text-black-200 text-opacity-50 font-small">
                    {/*The healthy organic groceries that safe for our health.*/}
                    Eat healthily – Eat Organic
                    {/*Greener – Healthier – Natural*/}
                </h2>
            <div className="font-small">
                <a href="#browse-the-room"
                className="border-4 border-green-500
                text-green-500
                hover:bg-green-500
                hover:text-white
                rounded-lg px-8 py-3 mt-4
                inline-block flex-none
                transition duration-300"
                >
                    Shop Now
                </a>
            </div>
        </div>

            <div className="w-full inset-0 md:w-1/2">
                <div className="hero-image">
                    <div className="overlay inset-0 bg-black opacity-35 z-10"></div>
                    <img className="object-cover object-center" src="images/content/image-section.png" alt="section hero" />
                </div>
            </div>
        </section>
    )
}
