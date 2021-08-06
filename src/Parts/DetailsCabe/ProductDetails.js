import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {useGlobalContext} from 'Helper/Hooks/useGlobalContext';
import "Format/currency";

export default function ProductDetails({data}) {
    const {dispatch} = useGlobalContext();
    return (
        <section className="mt-10">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1">
                    <div className="col-span-1 row-span-1">
                        <img src={data?.imageUrl} alt="ImageProduct" className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="col-span-1 row-span-1">
                        <div className="ml-20">
                            <h2 className="text-3xl font-bold font-big">{data?.id_product_ref.title}</h2>
                            <p className="text-xl py-5 font-medium">{data?.id_product_ref.price.currency()}</p>
                            <button className="hidden
                                    transition-all
                                    duration-200 bg-green-500
                                    text-white focus:bg-black
                                    focus:text-white rounded-lg
                                    px-8 py-3 md:inline-flex mt-8"
                                onClick={() => dispatch({
                                    type: "ADD_TO_CART",
                                    item: data
                                })}
                            >
                            <img className="pr-3" src="/images/Icon/icon-cart.svg" alt="Icon-cart" />

                                Add to Cart
                            </button>
                            <div className="flex md:flex-row mt-9">
                                    <i className="ri-store-2-line ri-3x m-3 icon"></i>
                                    <h2 className="text-base font-small text-gray-600 my-auto ">TOKO </h2>
                            </div>
                            <h2 className="text-base font-small text-green-900">{data?.merchant.nama}</h2>
                            <hr className="my-8 hidden md:flex" />
                            <h5 className="text-xl font-semibold font-small mt-8 mb-4 md:mt-0">Details</h5>
                            <div className="font-big text-gray-700">
                            {
                                data?.description ? ReactHtmlParser(data?.description) : ""
                            }
                            </div>
                            <hr className="my-5 md:hidden" />
                            <button className="md:hidden
                                    transition-all duration-200
                                    bg-green-500 text-white
                                    focus:bg-black focus:text-white
                                    rounded-lg px-8 py-3 inline-flex mt-5"
                            >
                            <img className="pr-3" src="/images/Icon/icon-cart.svg" alt="Icon-cart" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
