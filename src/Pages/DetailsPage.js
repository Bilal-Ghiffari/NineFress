import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import useAsnyc from 'Helper/Hooks/useAsyn';
import fetch from 'Helper/Fetch';
import Navbar from 'Parts/navbar';
import Breadcrumb from 'component/Breadcrumb';
import ProductDetails from 'Parts/Details/ProductDetails';

export default function DetailsPage() {
    const {idp, idc} = useParams();
    const {data, run} = useAsnyc();

    useEffect(() => {
        run(fetch({url:`https://ninefresh.herokuapp.com/api/market/item-details/1`}))
    }, [run])

    return (
        <>
            <Navbar />
            <Breadcrumb list={[
                {url: "/", name:"Home"},
                {url: `/categories/${idc}`, name:"Categories"},
                {url: `/categories/${idc}/product/${idp}`, name:"Details"}
            ]}/>
            <ProductDetails data={data} />
        </>
    )
}
