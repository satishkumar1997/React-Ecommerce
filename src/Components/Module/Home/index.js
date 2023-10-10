import React, { useState, useEffect } from 'react';
import Hero from '../../Hero';
import Testimonials from '../../Testimonials';
import Teams from '../../Teams';
import ProductCards from '../../ProductCards';
import Categories from '../../Categories';
export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            
            setProducts(data);
            // console.log(data);
        }
        fetchProducts();
    }, []);

    return (
        <div>

            <Hero />
            <Categories />
            <h1 className="text-center">Products</h1>
            <h1 className="text-center">Popular Products</h1>

            {
                products.length > 0
                    ? <ProductCards product={products} />
                    : <div>Loading Please Wait a moment................</div>
            }
            <ProductCards />
            <Testimonials />
            <Teams />
        </div>
    );
}

