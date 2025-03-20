"use client";

import Card from "./Card";
import data from "@/utils/data.json";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(data); // Inicializa con todos los productos

  const filterProducts = (e) => {
    const value = e.target.value;

    if (value === "Todos") {
      setProducts(data);
    } else {
      const filteredProducts = data.filter(
        (product) => product.marca === value
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <div id="food" className="mx-auto bg-white">
      <div className="text-center mb-4 md:mb-12">
        <h2 className="font-bold text-[25px] lg:text-[35px] leading-none text-slate-100 bg-slate-900 py-2 md:py-4 ">
          Alimentos sueltos
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center ml-16 md:ml-32 my-4">
          <label
            htmlFor="filtrar por marca"
            className="block font-medium text-gray-900"
          >
            Buscar por marca:
          </label>
          <select
            className="p-2 rounded-lg border border-gray-600 bg-slate-50"
            onChange={filterProducts}
          >
            <option className="font-sans" value="Todos">
              Todos
            </option>
            <option className="font-sans" value="Pedigree">
              Pedigree
            </option>
            <option className="font-sans" value="Eukanuba">
              Eukanuba
            </option>
            <option className="font-sans" value="Dog Chow">
              Dog Chow
            </option>
          </select>
        </div>
        <div>
          <h3 className="text-slate-500 text-center text-wrap md:text-lg">* Si tu producto o marca no está en la lista, hacenos tu pedido por <span className="text-green-600 font-semibold animate-pulse">WhatsApp</span> .</h3>
        </div>
        <div className="gap-4 mx-2 md:mx-32 mb-32 grid grid-cols-1 md:grid-cols-3">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product.nombre}
                nombre={product.nombre}
                descripcion={product.descripcion}
                precio={product.precio}
                promo={product.promo}
                img={product.img}
              />
            ))
          ) : (
            <p className="text-center col-span-2">
              No hay productos disponibles.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
