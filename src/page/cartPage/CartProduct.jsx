import React from 'react'
import CartV from './CartV'
import { useSelector } from 'react-redux'


export default function CartView() {
    const product = useSelector((state) => state.cart.items)
    return (
        <div className='flex justify-center text-center items-center mt-[100px]  '>
            <div className="w-1/2 p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-3xl font-bold leading-none text-gray-900 dark:text-white">Shoping Cart</h5>
                </div>
                <hr className='mt-[30px]' />
                <div className=' overflow-y-scroll h-[55vh] '>
                    {product.map((itemV, index) => {
                        return (
                            <>
                                <CartV
                                    key={index}
                                    description={itemV.description}
                                    qty={itemV.qty}
                                    price={itemV.price}
                                    title={itemV.title}
                                    img={itemV.image}
                                    id={itemV.id}
                                />
                            </>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}
