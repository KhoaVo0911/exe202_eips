import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalComponent = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white p-4 rounded shadow-lg max-w-lg mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
        <button
          onClick={onRequestClose}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
