import React from 'react';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function BrowseCate({data}) {
    console.log(data.data)
    return (
        <section className="my-16 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex md:justify-start justify-center py-5">
                    {/* <h1 className="text-3xl text-green-500 font-bold font-big capitalize" data-aos="fade-down" data-aos-duration="1800">
                    Browse our hottest categories
                    </h1>*/}
                    <h1 className="text-3xl text-green-500 font-bold font-big capitalize" data-aos="fade-down" data-aos-duration="1800">
                    Best Sell Products by categories
                    </h1>
                </div>
                <div className="grid grid-rows-1 md:grid-cols-4 grid-cols-2 gap-4">
                    {
                        data?.data.map((item) => {
                            return  <div className="col-span-1 row-span-1 card my-10" key={item.id} title={item.title} data-aos="fade-up" data-aos-duration="1500">
                                        <Link to={`/categories/item/${item.category}`}>
                                            <div className="relative card-shadow ">
                                                <img className="w-full h-full object-cover object-center rounded-lg" src={item.imgUrl} alt="" />
                                                <div className="absolute left-0 bottom-32 flex justify-center flex-col pl-12 top-8">
                                                    <h2 className="text-2xl text-white font-medium font-small">{item.title}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
AOS.init();
