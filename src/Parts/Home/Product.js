import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CarouselTouch from 'component/TouchCarousel';
import fetch from 'Helper/Fetch';
import useAsnyc from 'Helper/Hooks/useAsyn';
import SkeletonProduct from 'Helper/Loading/SkeletonProduct';


export default function Product() {

    const refContainer = useRef(null);
    console.log(refContainer)

    const {data, run, isLoading} = useAsnyc();
    useEffect(() => {
        run(fetch({url:"https://ninefresh.herokuapp.com/api/market/item"}))
    }, [run])

    console.log(data)
    return (
        <section className="flex flex-col py-16">
            <div className="container mx-auto mb-4">
                <div className="flex justify-start mb-4">
                    <h3 className="text-2xl text-green-500 capitalize font-bold font-big">
                        Top Product
                    </h3>
                </div>
            </div>
            <div className="overflow-x-hidden px-4" id="carousel">
                <div className="container mx-auto" ref={refContainer}></div>

                {    isLoading ? (
                    <div className="flex -mx-4 flex-row"
                        style={{paddingLeft: refContainer.current?.getBoundingClientRect?.()?.left - 16 || 0}}
                    >
                        <SkeletonProduct />
                    </div>
                    ):
                    <CarouselTouch refContainer={refContainer}>
                        {
                            data?.map((item) => {
                                return (
                                    <div className="px-4 card group" key={item._id}>
                                        <Link to={`/categories/${item.id_category._id}/product/${item._id}`}>
                                        <div className="rounded-xl overflow-hidden card-shadow" style={{width:290, height: 370}}>
                                            <img src={item.imageUrl} alt="ProductItem" className="w-full h-full object-cover object-center" />
                                        </div>
                                        <h5 className="text-lg font-semibold mt-4 font-small">{item.title}</h5>
                                        <span>{item.price}</span>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </CarouselTouch>
                }
            </div>
        </section>
    )
}
