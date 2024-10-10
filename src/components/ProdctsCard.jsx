// import React, { useState } from "react";
import Link from "next/link";
import furnitureData from "@/app/utility/productsData";

function ProductCards({ cardLimit }) {
  console.log(furnitureData);

  const filterArr = furnitureData.filter(
    (productObj) => productObj.id >= cardLimit
  );
  console.log(filterArr);

  return (
    <section className="text-gray-600 body-font poppins-regular">
      <div className="container px-10 lg-px-0 py-14 mx-auto">
        <div className="flex flex-wrap min-h-80 -m-4 justify-center md:justify-start xl:justify-start lg:justify-start">
          {(cardLimit ? filterArr : furnitureData).map((productObj) => {
            console.log(productObj);

            return (
              <div
                key={productObj.id}
                className="relative py-4 px-2 sm:w-1/2 md:w-1/2 lg:w-1/4"
              >
                {productObj.discountPercentage > 5 && (
                  <label className="m-2 p-2 text-center bg-red-300 text-white rounded-full h-10 w-10 absolute">
                    -{Math.floor(productObj.discountPercentage)}
                  </label>
                )}
                <Link
                  href={cardLimit ? `/shop/${productObj.id}` : `/${productObj.id}`}
                  passHref
                >
                  <div className="bg-gray-200 border h-full border-opacity-60 rounded-sm overflow-hidden">
                    <img
                      className="lg:h-80 md:h-80 bg-gray-100 h-72 w-full object-cover object-center"
                      src={productObj.thumbnail}
                      alt={productObj.name}
                    />
                    <div className="p-4">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        {productObj.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-600 mb-1">
                        {productObj.name}
                      </h1>
                      <p className="leading-relaxed text-gray-400 mb-1">
                        {productObj.description}
                      </p>
                      <h2 className="tracking-widest font-bold text-gray-500 mb-1">
                        Rs .{productObj.price}/=
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductCards;
