import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import useAsyn from 'Helper/Hooks/useAsyn';
import fetch from 'Helper/Fetch';
import LoadingSkeleton from 'Helper/Loading/SkeletonBrowseCate';


export default function BrowseCate() {
    const {data, run, isLoading} = useAsyn();

    useEffect(() => {
        run(fetch({url:"https://ninefresh.herokuapp.com/api/market/item-category"}))
    },[run])

    console.log(data)

    return (
        <section className="my-16 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex md:justify-start justify-center py-5">
                    <h1 className="text-2xl text-green-500 font-bold font-big capitalize">Browse our hottest categories</h1>
                </div>
                <div className="grid grid-rows-1 md:grid-cols-4 grid-cols-2 gap-4">
                    
                    {
                        isLoading ? <LoadingSkeleton />  : 
                        data?.map((item) => {
                                return <div className="col-span-1 row-span-1 card my-10" key={item._id}>
                                        <Link to={`/categories/${item._id}`}>
                                            <div className="relative card-shadow ">
                                                <img className="w-full h-full object-cover object-center rounded-lg" src={item.imageUrl} alt="" />
                                                <div className="absolute left-0 bottom-32 flex justify-center pl-12 top-8">
                                                    <h2 className="text-lg text-white font-medium font-small">{item.title}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
