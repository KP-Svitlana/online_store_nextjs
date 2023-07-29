'use client'

import {useState, useEffect} from 'react';

import {ProductsListSt, ProductsSectionSt, ProductsTitleSt, ProductsWrapperSt} from "./ProductsList.styled.js";
import ProductItem from "@/components/ProductItem/ProductItem";
import Button from "@/components/Button/Button";

function getNumberOfProductsToDisplay(windowWidth) {
    if (windowWidth <= 1440) {
        return 5;
    } else {
        return 8;
    }
};

export default function ProductsList({products}) {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    console.log(products)
    //
    // useEffect(() => {
    //     setLoading(true);
    //     fetch('https://64934ce0428c3d2035d1a156.mockapi.io/api/v1/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching data:", error);
    //         })
    //         .finally(() => setLoading(false));
    // }, []);

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [productsToDisplay, setProductsToDisplay] = useState(getNumberOfProductsToDisplay(windowWidth));
    // const [productsRender, setProductsRender] = useState([]);
    //
    // function getArrProducts() {
    //     const myProducts = products?.slice(0, productsToDisplay);
    //     setProductsRender(myProducts);
    // };
    //
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };
    //     window.addEventListener('resize', handleResize);
    //
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    //
    // useEffect(() => {
    //     setProductsToDisplay(getNumberOfProductsToDisplay(windowWidth));
    // }, [windowWidth]);
    //
    // useEffect(() => {
    //     getArrProducts();
    // }, [productsToDisplay, products]);
    //
    // function handleLoadMore() {
    //     setProductsRender(products);
    // };

    return (<></>
        // <ProductsSectionSt>
        //     {loading ? (<p style={{color: 'red', fontSize: '40px'}}>Loading...</p>)
        //         : (<>
        //             <ProductsTitleSt>Новинки</ProductsTitleSt>
        //             <ProductsWrapperSt>
        //                 <ProductsListSt>
        //                     {productsRender?.map(item => {
        //                         return <ProductItem key={item.id} item={item}/>
        //                     })}
        //
        //                 </ProductsListSt>
        //                 {productsRender.length !== products?.length && (
        //                     <Button text='Переглянути всі' handleLoadMore={handleLoadMore}/>
        //                 )}
        //             </ProductsWrapperSt>
        //         </>)}
        // </ProductsSectionSt>
    );
}


