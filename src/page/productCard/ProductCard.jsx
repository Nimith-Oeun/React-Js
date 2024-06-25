import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/feature/product/ProductSlice";
import Loading from "../Loading/Loading";
import ProductCardComponent from "./ProductCardComponent";

export default function ProductCard() {
    const LoadingPage = [1, 2, 3, 4, 5, 6, 7, 8]
    const dispatch = useDispatch();
    const { status, products, error } = useSelector((state) => state.products);
    console.log("status", status)

    useEffect(() => {
        console.log("useEffect")
        dispatch(fetchProducts());
    }, []);

    return (
        <section >
            <h1 className="text-3xl text-cyan-700 font-bold text-center mt-[80px]">
                Our Products
            </h1>
            {status === "loading" && (
                <div className="p-5 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {
                        LoadingPage.map(() => <Loading />)

                    }
                </div>
                )
            }
            {status === "success" && (
                <div className="p-5 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {products.slice(0, 12).map((product, index) => {
                        // console.log("map product",product)
                        return (
                            <ProductCardComponent
                                key={index}
                                image={product.images}
                                description={product.description}
                                title={product.title}
                                price={product.price}
                                qty={1}
                                id={product.id}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
}
