import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Redux/feature/product/ProductSlice';
import Loading from '../Loading/Loading';

export default function ProductCard() {
    const dispatch = useDispatch();
    const {status,products,error} = useSelector((state) => state.products)
    console.log("status",status)
    // console.log("image",products)


    // console.log("store", store)

    useEffect(() => {
        // console.log("useEffect")
        dispatch(fetchProducts())
    }, [])
    return (
        <section >
            <h1 className='text-3xl text-cyan-700 font-bold text-center'>Our Products</h1>
            {status === "loading" && <Loading/>}
            {status === "success" && <div className="p-5 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    products.slice(0, 12).map((product, index) => {
                        // console.log("map product",product)
                        return (
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                                <a href="#">
                                    <img className="p-8 rounded-t-lg h-[350px] object-cover" src={product.images} alt="product image" />
                                </a>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                                    </a>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>}

        </section>
    )
}
