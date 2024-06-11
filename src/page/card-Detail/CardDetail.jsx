import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Card } from "flowbite-react";

export default function CardDetail() {
    const [isProduct,setProduct]= useState({});
    const location = useLocation()

    useEffect(() => {
        setProduct(location.state)
    },[])
    

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <Card className="max-w-sm">
                    <div>
                        <img
                            className="h-[350px] object-cover"
                            src={
                                isProduct.images
                                    ? isProduct.images
                                    : "https://dummyimage.com/720x400"
                            }
                            alt={"title"}
                        />
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {isProduct.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {isProduct.description}
                    </p>
                </Card>
            </div>
        </>
    )
}
