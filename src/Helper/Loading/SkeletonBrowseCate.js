import React from 'react';

export default function SkeletonBrowseCate() {
    return (
        <>
            {
                Array(4).fill().map((_, index) => {
                    return  <div className="col-span-1 row-span-1 my-10"  key={index}>
                                <div className="relative animate-pulse">
                                        <div className="rounded-lg bg-gray-300" style={{width: 310, height: 250}}></div>
                                        <div className="absolute left-0 bottom-32 flex justify-center pl-12 top-8">
                                            <div className=" w-40 h-4 bg-gray-400 rounded-full"></div>
                                        </div>
                                </div>
                            </div>
                })
            }
        </>
    )
}
