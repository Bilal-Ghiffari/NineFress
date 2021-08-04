import React from 'react';
import Navbar from 'Parts/navbar'
import { Link } from 'react-router-dom';

export default function Success() {
    return (
        <>
            <Navbar />
            <section className="">
                <div className="container mx-auto min-h-screen">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full md:w-4/12 text-center">
                            <img src="/images/content/illustration-success.png" alt="Success Ilustrasion" />
                            <h2 clasName="text-3xl font-semibold mb-6">Anda telah Menyelesaikan pembayaran</h2>
                            <p className="text-lg mb-12">
                                Pesanan anda telah diproses dan siap untuk kami kirimkan
                            </p>
                            <Link to="/"
                            className="text-white bg-green-500 
                            focus:outline-none w-full 
                            py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
                            >
                                Back to Shop
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
