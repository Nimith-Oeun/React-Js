import React from 'react'
import { useDispatch } from 'react-redux'
import { incressQuantity, decressQuantity } from '../../Redux/feature/cart/CartSlice'

export default function Quantity({ qty, id }) {
    const dispatch = useDispatch()

    const handleIncressQuantity = () => {
        dispatch(incressQuantity({ id }))
        console.log('incressQuantity')
    }

    const handleDecressQuantity = () => {
        dispatch(decressQuantity({ id }))
        console.log('decressQuantity')
    }
    return (
        <>
            <form className="max-w-xs mx-auto">
                <div className="relative flex items-center">
                    <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="counter-input"
                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        onClick={() => handleDecressQuantity()}
                    >
                        -
                    </button>
                    <input
                        type="text" id="counter-input"
                        data-input-counter className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                        placeholder=""
                        value={qty}
                        required
                    />
                    <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        onClick={() => handleIncressQuantity()}
                    >
                        +
                    </button>
                </div>
            </form>

        </>
    )
}
