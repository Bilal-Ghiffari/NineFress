import React from 'react'
import Navbar from 'Parts/navbar'
import Breadcrumb from 'component/Breadcrumb'
import Categories1 from 'Parts/Categories-item/categories1';

export default function CategoriesItem1() {
    return (
        <>
            <Navbar />
            <Breadcrumb list={[
                {url: "/", name: "Home"},
                {url: "/categories", name: "Categories"},
                {url: "/categories/item", name: "Item"}
            ]} />
            <Categories1 />
        </>
    )
}
