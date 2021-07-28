import React from 'react';
import Navbar from 'Parts/navbar';
import Hero from 'Parts/Home/Hero';
import BrowseCate from 'Parts/Home/BrowseCate';
import ApiCategories from 'MockupApi/BrowseCate.json';
import ApiProduct from 'MockupApi/Product.json';
import Product from 'Parts/Home/Product';
import AsideMenu from 'Parts/AsideMenu';

export default function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <BrowseCate data={ApiCategories} />
            <Product data={ApiProduct} />
            <AsideMenu />
        </>
    )
}
