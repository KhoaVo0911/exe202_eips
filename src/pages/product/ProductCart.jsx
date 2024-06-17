import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

const ProductCart = ({ data }) => {
  const { image, name, price } = data;
  const handleAddToCart = () => {
    console.log("Adding to cart", data);
    // Logic to add product to cart
  };

  return (
    <div
      className="bg-white p-5 rounded-xl m-2"
      style={{ boxShadow: "0 10px 50px rgba(181, 179, 255, 0.25)" }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover object-top drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] rounded-md"
      />
      <h3 className="text-xl py-3 text-center font-medium mt-6">{name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold mt-3">{price} VND</p>
        <button
          className="p-2 rounded-md text-sm hover:bg-gray-300 flex items-center justify-center"
          onClick={handleAddToCart}
        >
          <span className="text-2xl ">
            <FaCirclePlus />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
