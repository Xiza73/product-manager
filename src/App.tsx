import Form from "./components/Form";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import { IProduct } from "./utils/types";

export const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const productsLS = localStorage.getItem("products");
    console.log(productsLS);
    if (productsLS) {
      setProducts(JSON.parse(productsLS));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          products={products}
          setProducts={setProducts}
          product={product}
          setProduct={setProduct}
        />

        <ProductList
          products={products}
          setProduct={setProduct}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
};
