import Breadcrumb from 'component/Breadcrumb'
import AsideMenu from 'Parts/AsideMenu'
import ListCart from 'Parts/Cart/ListCart'
import ShippingDetails from 'Parts/Cart/ShippingDetails'
import Navbar from 'Parts/navbar'
import React from 'react'

export default function CartPages() {
    return (
        <>
            <Navbar />
            <Breadcrumb list={[
                {url: "/", name:"Home"},
                {url: "/cart", name:"Shopping Cart"}
            ]} />
            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <ListCart />
                        <ShippingDetails />
                    </div>
                </div>
            </section>
            <AsideMenu />
        </>
    )
}
