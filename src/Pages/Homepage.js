import React from 'react';
import Navbar from 'Parts/navbar';
import Hero from 'Parts/Home/Hero';
import BrowseCate from 'Parts/Home/BrowseCate';
import Product from 'Parts/Home/Product';
import AsideMenu from 'Parts/AsideMenu';
import useScrollToTop from 'Helper/Hooks/useScrollToTop';

export default function Homepage() {
     useScrollToTop()
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
