import React, {useRef} from 'react';
import CarouselTouch from 'component/TouchCarousel';
import { Link } from 'react-router-dom';


export default function Product({data}) {
    
    const refContainer = useRef(null);
    console.log(refContainer)

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
                {
                    data?.data.length === 0 ? (
                        "No Product Found"
                    ):  <CarouselTouch refContainer={refContainer}>
                        {
                            data?.data?.map((item) => {
                                return (
                                    <div className="px-4 relative card group" key={item.id}>
                                        <div className="rounded-xl overflow-hidden card-shadow relative" style={{width:290, height: 370}}>
                                            <img src={item.imageUrl} alt="ProductItem" className="w-full h-full object-cover object-center" />
                                        </div>
                                        <h5 className="text-lg font-semibold mt-4 font-small">{item.title}</h5>
                                        <span>{item.price}</span>
                                            <Link to={`/categories/${item.idp}/product/${item.id}`} className="absolute inset-0 z-10"></Link>
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
