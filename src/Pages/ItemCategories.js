import React from 'react'
import Navbar from 'Parts/navbar'
import Breadcrumb from 'component/Breadcrumb'
import Categories1 from 'Parts/Categories-item/categories1';
import { useParams } from 'react-router-dom';

export default function CategoriesItem1() {
    const {idc} = useParams();
    return (
        <>
            <Navbar />
            <Breadcrumb list={[
                {url: "/", name: "Home"},
                {url: `/categories/${idc}`, name: "Categories"},
            ]} />
            <Categories1 />
        </>
    )
}
