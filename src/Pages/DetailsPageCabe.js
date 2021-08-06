import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import useAsnyc from 'Helper/Hooks/useAsyn';
import fetch from 'Helper/Fetch';
import Navbar from 'Parts/navbar';
import Breadcrumb from 'component/Breadcrumb';
import ProductDetails from 'Parts/DetailsCabe/ProductDetails';
import ReletedProduct from 'Parts/DetailsCabe/ReletedProduct';
import AsideMenu from 'Parts/AsideMenu';
import SkeletonProductDetails from 'Helper/Loading/SkeletonProductDetails';
import SkeletonReletedProduct from 'Helper/Loading/SkeletonReletedProduct';
import useScrollToTop from 'Helper/Hooks/useScrollToTop';



export default function DetailsPage() {

    const {idp, idc} = useParams();
    const {data, run, isLoading} = useAsnyc();

    useEffect(() => {
        run(fetch({url:`https://ninefresh.herokuapp.com/api/market/item-details/1`}))
    }, [run])

    const DetailsProduct = () => {
        return isLoading ? <SkeletonProductDetails /> : <ProductDetails data={data} />
    }

    const Releted  = () => {
        return isLoading ? <SkeletonReletedProduct /> : <ReletedProduct data={data?.relatedProducts} />
    }

    useScrollToTop()
    return (
        <>
            <Navbar />
            <Breadcrumb list={[
                {url: "/", name:"Home"},
                {url: `/categories/${idc}`, name:"Categories"},
                {url: `/categories/${idc}/product/${idp}`, name:"Details"}
            ]}/>
            <DetailsProduct />
            <Releted/>
            <AsideMenu/>
        </>
    )
}
