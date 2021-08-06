import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import useAsnyc from 'Helper/Hooks/useAsyn';
import fetch from 'Helper/Fetch';
import Navbar from 'Parts/navbar';
import Breadcrumb from 'component/Breadcrumb';
import ProductDetails from 'Parts/DetailsTelur/ProductDetails';
import ReletedProduct from 'Parts/DetailsTelur/ReletedProduct';
import AsideMenu from 'Parts/AsideMenu';
import SkeletonProductDetails from 'Helper/Loading/SkeletonProductDetails';
import SkeletonReletedProduct from 'Helper/Loading/SkeletonReletedProduct';



export default function DetailsPage() {
    const {idp} = useParams();
    const {data, run, isLoading} = useAsnyc();

    useEffect(() => {
        run(fetch({url:`https://ninefresh.herokuapp.com/api/market/item-details/2`}))
    }, [run])

    const DetailsProduct = () => {
        return isLoading ? <SkeletonProductDetails /> : <ProductDetails data={data} />
    }

    const Releted  = () => {
        return isLoading ? <SkeletonReletedProduct /> : <ReletedProduct data={data?.relatedProducts} />
    }

    return (
        <>
            <Navbar />
            <Breadcrumb list={[
                {url: "/", name:"Home"},
                {url: `/categories/4`, name:"Categories"},
                {url: `/categories/4/product/${idp}`, name:"Details"}
            ]}/>
            <DetailsProduct />
            <Releted/>
            <AsideMenu/>
        </>
    )
}
