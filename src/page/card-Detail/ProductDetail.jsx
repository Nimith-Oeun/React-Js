import React, { useEffect } from 'react'
import { Card } from "flowbite-react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../Redux/feature/product/ProductSlice';
import Loading from '../Loading/Loading';


export default function ProductDetail() {
    const param = useParams()
   const dispatch = useDispatch()
   const {singleProduct , status} = useSelector((state) => state.products)
   console.log("product",singleProduct)
   console.log("status",status)

   useEffect(() => {
    console.log("uesEffect")
    dispatch(fetchSingleProduct(param.id))
   },[])


    return (
        <>
           
            {status === "loading" && (
                <div className='flex justify-center items-center h-screen'>
                     <Loading/>
                </div>
               )}
            {status === "success" && 
                <div className="flex justify-center items-center h-screen">
                <Card className="max-w-sm">
                    <div>
                        <img
                            className="h-[350px] object-cover"
                            src = {singleProduct.images && singleProduct.images[0]}
                            alt={"title"}
                        />
                    </div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {singleProduct.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                       {singleProduct.description}
                    </p>
                </Card>
            </div>
            }
        </>
    )
}
