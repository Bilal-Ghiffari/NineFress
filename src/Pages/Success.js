import React from 'react';
import Navbar from 'Parts/navbar'
import { Link } from 'react-router-dom';
import AsideMenu from 'Parts/AsideMenu';

export default function Success() {
    return (
        <>
            <Navbar />
            <section className="">
                <div className="container mx-auto min-h-screen">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full md:w-4/12 text-center">
                            <img src="/images/content/illustration-success.png" alt="Success Ilustrasion" className="mt-36" />
                            <h2 className="text-2xl font-semibold my-6 font-small">Anda telah Menyelesaikan pembayaran</h2>
                            <p className="text-lg mb-12 font-small">
                                Pesanan anda telah diproses dan siap untuk kami kirimkan
                            </p>
                            <Link to="/"
                            className="text-white bg-green-500
                            focus:outline-none w-full
                            py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer font-big"
                            >
                                Back to Shop
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <AsideMenu />
        </>
    )
}
