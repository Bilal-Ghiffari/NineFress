import React from 'react';
import {useGlobalContext} from 'Helper/Hooks/useGlobalContext';
import { Link } from 'react-router-dom';
import "Format/numbering";

export default function ListCart() {

    const {state, dispatch} = useGlobalContext()

    return (
        <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0">
            <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
                <h3 className="text-2xl text-green-500">Shopping Cart</h3>
            </div>
            <div className="border-b border-gray-200 mb-4 hidden md:block">
                <div className="flex flex-start items-center pb-2 -mx-4">
                    <div className="px-4 flex-none">
                        <div className="" style={{width: 90}}>
                            <h6>Photo</h6>
                        </div>
                    </div>
                    <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Product</h6>
                        </div>
                    </div>
                    <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Price</h6>
                        </div>
                    </div>
                    <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Quantity</h6>
                        </div>
                    </div>
                    <div className="px-4 w-2/12">
                        <div className="text-center">
                            <h6>Action</h6>
                        </div>
                    </div>
                </div>
            </div>

            {
                Object.keys(state.cart).length === 0 ? (
                    <div className="pt-5">
                    <p className="text-center">
                        Cart anda masing kosong
                    </p>
                        <img src="/images/content/CartShop.png" alt="CartShop" />
                    </div>
                ): Object.keys(state.cart).map((key) => {
                    const item = state.cart[key]

                    return (
                        <div className="flex flex-start flex-wrap items-center -mx-9" key={key}>
                            <div className="px-4 flex-none">
                                <div className="" style={{width: 90, height: 90}}>
                                    <img src={item.imageUrl} alt="Image-listCart" />
                                </div>
                            </div>
                            {/* Screen Mobile */}
                            <div className="px-12 md:px-4 w-auto flex-1 md:w-5/12">
                                <div className="">
                                    <h6 className="font-semibold text-lg md:text-xl leading-8">
                                        {item.id_product_ref.title}
                                    </h6>
                                    <span className="text-sm md:text-lg">
                                        {item.id_product_ref.id_category.category}
                                    </span>
                                    <h6 className="font-semibold text-base md:text-lg block md:hidden py-3">
                                        {item.id_product_ref.price.numbering()}
                                    </h6>
                                    <div className="amount md:hidden pt-3">
                                            <button className="count">
                                                <i className="ri-subtract-line ri-lg"></i>
                                            </button>
                                                <span>0</span>
                                            <button className="count">
                                                <i className="ri-add-fill ri-lg"></i>
                                            </button>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                                <div className="">
                                    <h6 className="font-semibold text-lg">
                                        {item.id_product_ref.price}
                                    </h6>
                                </div>
                            </div>
                            <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                                        <div className="amount">
                                            <button className="count">
                                                <i className="ri-subtract-line ri-lg"></i>
                                            </button>
                                                <span>0</span>
                                            <button className="count">
                                                <i className="ri-add-fill ri-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                            <div className="px-4 w-2/12">
                                <div className="text-center">
                                    <Link
                                        onClick={() => dispatch({
                                            type: "REMOVE_CART",
                                            id: item._id
                                        })}
                                        className="text-red-600 border-none focus:outline-none px-3 py-1"
                                    >
                                        <i class="ri-delete-bin-fill ri-xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
