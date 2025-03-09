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
    <div id="food" className="container mx-auto">
      <div className="flex gap-2 md:gap-4 justify-center items-center">
        <h2 className="py-16 md:py-32 text-3xl md:text-6xl font-semibold">
          Nuestros productos
        </h2>
        <i
          className="icon-[fa-solid--paw] mt-0 md:mt-4 w-10 h-10 md:w-16 md:h-16"
          role="img"
          aria-hidden="true"
        ></i>
      </div>
      <h2 className="text-center text-xl md:text-2xl">- Alimentos sueltos por Kilo -</h2>
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
