import { currencyFormat, isValidUrl } from "../utils/functions";
import { IProduct } from "../utils/types";
type IProps = {
  product: IProduct;
  products: IProduct[];
  setProduct: (product: IProduct | null) => void;
  setProducts: (products: IProduct[]) => void;
};

export default function Product({
  product,
  products,
  setProduct,
  setProducts,
}: IProps) {
  const { name, description, price, currency, imgURL } = product;

  return (
    <div className="mx-5 mb-5 bg-white shadow-md px-5 py-6 rounded-xl">
      {isValidUrl(imgURL) ? (
        <img
          src={imgURL}
          alt={name}
          className="w-1/2 lg:w-1/3 h-auto object-cover rounded-xl flex mx-auto mb-3"
        />
      ) : (
        <div className="w-1/2 lg:w-1/3 h-auto bg-gray-200 rounded-xl flex mx-auto mb-3 items-center justify-center px-3 py-5">
          <p className="text-center text-gray-700 text-xl">
            No hay imagen disponible
          </p>
        </div>
      )}
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Producto:&nbsp;
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripción:&nbsp;
        <span className="font-normal normal-case">{description}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Precio:&nbsp;
        <span className="font-normal normal-case">
          {currencyFormat(price, currency)}
        </span>
      </p>
      <div className="flex justify-between mt-7">
        <button
          type="button"
          className="py-2 px-7 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setProduct(product)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => {
            setProducts(products.filter((p) => p.id !== product.id));
            setProduct(null);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
