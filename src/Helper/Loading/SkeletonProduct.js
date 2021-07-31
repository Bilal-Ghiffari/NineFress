import React from 'react'

export default function SkeletonProduct() {
    return (
        <>
            {
                Array(5).fill().map((_, index) => {
                    return (
                        <div className="px-4 card group animate-pulse" key={index}>
                            <div className="rounded-xl overflow-hidden card-shadow bg-gray-300" style={{width:290, height: 370}}></div>
                                <div className="w-24 h-3 bg-gray-400 mt-3 rounded-full"></div>
                                <div className="w-36 h-3 bg-gray-400 mt-2 rounded-full"></div>
                        </div>
                    )
                })
            }
        </>
    )
}
