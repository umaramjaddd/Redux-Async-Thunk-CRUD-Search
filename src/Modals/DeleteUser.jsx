    import React from "react";
    import Modal from "react-modal";
    import './Test.css';
    import { deleteUser } from "../ReduxToolkit/UserumarSlice";
    import { useDispatch } from "react-redux";

    const DeleteUser = ({ isOpen, onRequestClose, user }) => {
    
        const dispatch =  useDispatch();
    
        const handleDelete = () => {
            dispatch(deleteUser(user.id));
            onRequestClose(); // Close the modal after deletion
        }

        return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="custom-modal"
        >
        {user && (
            <>
            <div>
                Are you sure you want to delete <span>{user.name}</span>'s  account? This action is irreversible.
            </div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            
        
            </>
        )}
        <div id="modal-buttons-container">
        <button id="my-button" className="delete" onClick={handleDelete}>Confirm Delete</button>
                <button id="my-button" onClick={onRequestClose}>Close</button>
            </div>
        </Modal>
    );
    };

    export default DeleteUser;
