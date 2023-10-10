import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCards from "../ProductCards";

export default function CategoryProduct() {
  const { name } = useParams();
  console.log(name);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${ name }`);
      const data = await response.json();

      setProducts(data);
      // console.log(data);
    };
    fetchProducts();
  }, []);

  if (products.length === 0) return <div>Loading...</div>;
  return (
<div>

<ProductCards product={products}/>
  </div>
  )
  
}
