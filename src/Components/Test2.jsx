import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import Modal from "react-modal";
// import "./Test.css";

export const Test2 = () => {

  const users = [
    { name: 'John Doe', email: 'john@example.com', contact: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane@example.com', contact: '987-654-3210' },
    { name: 'Bob Johnson', email: 'bob@example.com', contact: '555-123-4567' }
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  function showUserDetails(user) {
    setSelectedUser(user);
    toggleModal();
  }

  return (
    <div>

      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
            <p>Contact: {user.contact}</p>
            <button onClick={() => showUserDetails(user)}>Show details in Popup</button>
          <hr />
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="custom-modal"
      >
        <h2>Delete Account?</h2>

        <div>
          Are you sure you want to delete this account. This will permanently
          delete all your account inforrmation and will not let you sign in
          again. This action is irreversible
        </div>  
        {selectedUser && (
          <>
            <h2>{selectedUser.name}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Contact: {selectedUser.contact}</p>
            <div>
              Are you sure you want to delete this account? This action is irreversible.
            </div>
   
          </>
        )}
        
          
            <div id = 'modal-buttons-container'>
                <button id = 'my-button' onClick={toggleModal}> Delete Account</button> 
                          <button id = 'my-button' onClick={toggleModal}>Cancel</button>
            </div>
      </Modal>
    </div>
  );
};
