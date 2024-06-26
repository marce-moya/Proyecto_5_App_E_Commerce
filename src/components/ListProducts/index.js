import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from './../../context/Product/ProductContext'


export default function ListProdducts(props) {

  const ctx = useContext(ProductContext)
  const { products, getProducts } = ctx;
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        await getProducts();
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setLoading(false); // para detener
      }
    };

    fetchProducts();

  }, [getProducts]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {props.title}
        </h2>

        {loading ? (
          <p className="text-center my-8">Cargando productos...</p>
        ) : (

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {products.map((e) => (

              <Link to={`/${e._id}`} key={e._id}>
                <div className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src={e.imagen} alt="Product" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">{e.nombre}</h3>
                      <p className="mt-1 text-sm text-gray-500">${e.precio}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{e.descripción}</p>
                  </div>
                </div>
              </Link>

              ))}
            </div>
          )}
      </div>  
    </div>
  );
}
