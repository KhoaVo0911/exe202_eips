// PopupTable.js
import React from "react";
import "./product.scss";

const PopupTable = ({ product, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="table-container flex justify-center ">
          <table className="product-table ">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>STT</th>
                <th>Product Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Category</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <img src={product.image} alt={product.name} />
                </td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupTable;
