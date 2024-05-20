import React from "react";
import Modal from "react-modal";
import './Test.css';

const CustomModal = ({ isOpen, onRequestClose, user }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="custom-modal"
    >
      {user && (
        <>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <div>
            Are you sure you want to delete this account? This action is irreversible.
          </div>
     
        </>
      )}
      <div id="modal-buttons-container">
            <button id="my-button" onClick={onRequestClose}>Close</button>
          </div>
    </Modal>
  );
};

export default CustomModal;
