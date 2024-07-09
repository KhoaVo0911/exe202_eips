import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useCart } from "./CartContext";

const ProductCart = ({ data }) => {
  const { image, name, price } = data;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <div
      className="bg-white p-5 rounded-xl m-2 flex flex-col items-center"
      style={{ boxShadow: "0 10px 50px rgba(181, 179, 255, 0.25)" }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover object-center drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] rounded-md"
      />
      <h3 className="text-xl py-3 text-center font-medium mt-6">{name}</h3>
      <div className="flex justify-between items-center w-full">
        <p className="text-lg font-semibold mt-3">{price} VND</p>
        <button
          className="p-2 rounded-md text-lg hover:bg-gray-300 flex items-center justify-center"
          onClick={handleAddToCart}
        >
          <FaCirclePlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
