import React from 'react'
import Quantity from './Quantity'

export default function CartV({qty,img,description,price,title,id}) {
    return (
        <>
            <div>
                <div className="">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="w-[10rem] object-cover" src={img || "No img"} alt="Neil image" />
                                    
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-2xl font-bold text-gray-900 truncate text-start dark:text-white">
                                        {title || "No title"}
                                    </p>
                                    <p className="text-base text-gray-500  dark:text-gray-400 line-clamp-2 text-start">
                                        {description || "No title"}
                                    </p>
                                </div>
                                <div className="text-2xl inline-flex flex-col items-center font-bold text-gray-900 dark:text-white">
                                    {price * qty}$
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="flex justify-between mt-4">
                        <Quantity qty={qty} id={id} />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
