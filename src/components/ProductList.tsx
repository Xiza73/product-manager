import Product from "./Product";
import { IProduct } from "../utils/types";

type ProductListProps = {
  products: IProduct[];
  setProduct: (product: IProduct | null) => void;
  setProducts: (products: IProduct[]) => void;
};

export default function ProductList({
  products,
  setProduct,
  setProducts,
}: ProductListProps) {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {products && products.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">
            {products.length > 0 ? "Listado de Productos" : "No hay productos"}
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus&nbsp;
            <span className="text-indigo-600 font-bold">Productos</span>
          </p>
        </>
      ) : (
        <h2 className="font-black text-3xl text-center">
          Aquí aparecerán tus Productos
        </h2>
      )}

      <div className="md:h-screen overflow-y-auto">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            products={products}
            setProduct={setProduct}
            setProducts={setProducts}
          />
        ))}
      </div>
    </div>
  );
}
