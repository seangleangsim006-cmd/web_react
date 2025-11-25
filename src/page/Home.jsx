import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      {/* HERO SECTION */}
      <div className="container w-full h-[100vh] m-auto flex justify-evenly items-center px-10">
        <div className="description max-w-[600px]">
          <p className="text-gray-600 text-lg">Premium Display Technology</p>
          <h1 className="font-bold text-6xl leading-tight">Experience</h1>
          <h1 className="font-bold text-6xl leading-tight">Visual Perfection</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quae voluptates magni quibusdam odio soluta explicabo omnis.
          </p>
        </div>

        <img
          className="w-[600px] drop-shadow-xl"
          src="https://www.ourfriday.co.uk/image/cache/catalog/Apple/apple-macbook-air-2024-m3-spacegrey-1-2-200x200.png"
        />
      </div>

      {/* PRODUCT SECTION */}
      <div className="w-full px-10 mt-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {Array.isArray(products) &&
            products.map((val) => (
              <div
                key={val.id}
                className="bg-white rounded-2xl shadow-xl p-4 hover:scale-105 duration-300"
              >
                <img
                  className="w-full h-[150px] object-contain rounded-xl mb-3"
                  src={val.image}
                  alt={val.title}
                />

                <h3 className="font-bold text-xl">{val.title}</h3>

                <p className="text-gray-500 text-sm mt-1">
                  Smooth performance, stunning display, premium hardware.
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-[12px]">{val.price}$</span>

                  <button className="bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm px-2 py-1">
                    Order Now
                  </button>
                </div>
              </div>
            ))}

        </div>
      </div>
    </>
  );
};

export default Home;
