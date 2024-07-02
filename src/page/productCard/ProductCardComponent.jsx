import React from 'react'
import { addToCart } from "../../Redux/feature/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export default function ProductCardComponent({qty,id,price,image,description,title}) {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart);
    console.log("item",items)

    const handleAddToCart = () => {
        dispatch(addToCart({qty,id,price,image,description,title}))
    }

    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                
                    <Link to={`Product/${id}`}>
                        <img
                            className="p-8 rounded-t-lg h-[350px] object-cover"
                            src={image}
                            alt="product image"
                        />
                    </Link>
                    
                
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                            {description}
                        </h5>
                    </a>
                    <div className="flex items-center justify-between pt-4">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {price}$
                        </span>
                        <button
                            onClick={() => handleAddToCart()}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
