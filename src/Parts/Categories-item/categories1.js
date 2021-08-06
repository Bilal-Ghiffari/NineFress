import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import useAsyn from 'Helper/Hooks/useAsyn';
import fetch from 'Helper/Fetch';
import LoadingSkeleton from 'Helper/Loading/SkeletonBrowseCate';

export default function Categories1() {
    const {idc} = useParams();
    const {data, run, isLoading} = useAsyn();

    useEffect(() => {
        run(fetch({url:`https://ninefresh.herokuapp.com/api/market/item-group/${idc}`}))
    },[run])

    return (
        <section className="my-16 bg-white">
            <div className="container mx-auto">
                <div className="flex md:justify-start justify-center py-5">
                    <h1 className="text-2xl text-green-500 font-bold font-big capitalize">Category: {data ? data[0].id_category.category : "-"}</h1>
                </div>
                <div className="grid grid-rows-1 md:grid-cols-4 grid-cols-2 gap-4">

                    {
                        isLoading ? <LoadingSkeleton />  :
                        data?.map((item) => {
                                return <div className="col-span-1 row-span-1 card my-10" key={item._id}>
                                        <Link to={`/categories/${item.id_category._id}/product/${item._id}`}>
                                            <div className="rounded-xl overflow-hidden card-shadow" style={{width:290, height: 370}}>
                                                <img src={item.imageUrl} alt="ProductItem" className="w-full h-full object-cover object-center" />
                                            </div>
                                            <h5 className="text-lg font-semibold mt-4 font-small">{item.title}</h5>
                                            <span>{item.price.currency()}</span>
                                        </Link>
                                    </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
