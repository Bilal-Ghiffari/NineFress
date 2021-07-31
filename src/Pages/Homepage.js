import React from 'react';
import Navbar from 'Parts/navbar';
import Hero from 'Parts/Home/Hero';
import BrowseCate from 'Parts/Home/BrowseCate';
import Product from 'Parts/Home/Product';
import AsideMenu from 'Parts/AsideMenu';

export default function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <BrowseCate />
            <Product />
            <AsideMenu />
        </>
    )
}
