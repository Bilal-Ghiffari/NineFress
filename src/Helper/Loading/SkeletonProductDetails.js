import React from 'react'

export default function SkeletonProductDetails() {
    return (
        <section className="mt-10">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1">
                    <div className="col-span-1 row-span-1">
                        <div className="bg-gray-300 animate-pulse mb-20" style={{width: 600, height:600}}></div>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <div className="ml-20">
                            <div className="bg-gray-300 mt-6  animate-pulse w-36 h-4 rounded-full"></div>
                            <div className="bg-gray-300 mt-6  animate-pulse w-24 h-4 rounded-full"></div>
                            <div className="bg-gray-300 mt-6  animate-pulse w-52 h-10 rounded-lg"></div>
                            <hr className="my-8 hidden md:flex" />
                            <div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                            <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                            <div className="w-40 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                            <div className="w-96 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                            <div className="w-64 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
