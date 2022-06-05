import { useEffect, useState } from "react";
import { v4 as setId } from "uuid";
import { priceFormat } from "../utils/functions";
import { IProduct } from "../utils/types";
import Alert from "./Basic/Alert";
import { Input, TextArea, Select } from "./Basic/FormData";

type IProps = {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  product: IProduct | null;
  setProduct: (product: IProduct | null) => void;
};

export default function Form({
  products,
  setProducts,
  product,
  setProduct,
}: IProps) {
  const [form, setForm] = useState<IProduct>({
    id: "",
    name: "",
    description: "",
    price: 0,
    currency: "PEN",
    imgURL: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name } = e.target;
    const value =
      name === "price" ? priceFormat(e.target.value) : e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.description ||
      (!form.price && form.price !== 0) ||
      !form.currency ||
      !form.imgURL
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    if (product) {
      const newProducts = products.map((p) => (p.id === product.id ? form : p));
      setProducts(newProducts);
      setProduct(null);
    } else {
      const newProduct = { ...form, id: setId() };
      setProducts([...products, newProduct]);
    }
    setForm({
      id: "",
      name: "",
      description: "",
      price: 0,
      currency: "PEN",
      imgURL: "",
    });
  };

  const cleanForm = () => {
    setForm({
      id: "",
      name: "",
      description: "",
      price: 0,
      currency: "PEN",
      imgURL: "",
    });
  };

  useEffect(() => {
    if (product) return setForm(product);
    if (!product) return cleanForm();
  }, [product]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-7 md:mb-0">
      <h2 className="font-black text-3xl text-center">Detalles del producto</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade un Producto y&nbsp;
        <span className="text-indigo-600 font-bold">Administralo</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 flex flex-col my-auto mx-5"
      >
        <div className="mb-5">
          <Input
            id="name"
            value={form.name}
            onChange={handleChange}
            labelName="Nombre del Producto"
            placeholder="Laptop HP Blanca"
          />
        </div>
        <div className="mb-5">
          <TextArea
            id="description"
            value={form.description}
            onChange={handleChange}
            labelName="Descripción"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
        <div className="mb-5 flex justify-between">
          <div className="w-1/3">
            <Select
              id="currency"
              value={form.currency}
              onChange={handleChange}
              labelName="Moneda"
              options={[
                { value: "PEN", name: "PEN (S/)" },
                { value: "USD", name: "USD ($)" },
              ]}
            />
          </div>
          <div className="w-1/2">
            <Input
              id="price"
              value={form.price}
              onChange={handleChange}
              labelName="Precio"
              placeholder="S/5"
            />
          </div>
        </div>
        <div className="mb-2">
          <Input
            id="imgURL"
            value={form.imgURL}
            onChange={handleChange}
            labelName="Imagen"
            className="text-blue-600 underline"
            placeholder="https://..."
          />
        </div>

        <div className="mb-5"></div>

        <button
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md 
            hover:bg-indigo-700 cursor-pointer transition-all duration-300 ease-in-out"
        >
          {product ? "Editar Producto" : "Agregar Producto"}
        </button>

        {error && (
          <Alert
            message="Debes completar todos los campos para poder agregar un producto."
            setStatus={setError}
            type="error"
          />
        )}
      </form>
    </div>
  );
}
