import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUsers } from "../ReduxToolkit/UserumarSlice";
import CustomModal from "../Modals/showDetailsModal";
import "../Modals/Test.css";
import DeleteUser from "../Modals/DeleteUser";
import { useNavigate, Link } from "react-router-dom";


export default function AllUsers() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const { users, loading, searchQuery } = useSelector((state) => state.app);
  console.log("helllllo", users);
  console.log("Is allData an array?", Array.isArray(users));
  useEffect(() => {
    dispatch(readUsers());
  }, [dispatch]);

  const goToUpdate = (item) => {
    navigate("/updateuser", { state: { user: item } });
  };

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  function toggleDelete() {
    setDeleteOpen(!deleteIsOpen);
  }

  function showUserDetails(user) {
    setSelectedUser(user);
    toggleModal();
  }

  function showDeletePopup(user) {
    setSelectedUser(user);
    toggleDelete();
  }

  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <div>
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        user={selectedUser}
      />

      <DeleteUser
        isOpen={deleteIsOpen}
        onRequestClose={toggleDelete}
        user={selectedUser}
      />
      <Link to="/createuser">
        <button>Create User</button>
      </Link>

      {users &&
  users
    .filter((ele) => {
      if (searchQuery.length === 0) {
        return true; // Include all users if searchQuery is empty
      } else {
        return ele.name.toLowerCase().includes(searchQuery.toLowerCase()) || ele.email.toLowerCase().includes(searchQuery.toLowerCase());
      }
    })
    .map((item, index) => (
      <div key={index}>
        <h2>Name: {item.name}</h2>
        <p>Email: {item.email}</p>
        <p>Age: {item.age}</p>
        <p>Gender: {item.gender}</p>

        <div id="row-btns">
          <button onClick={() => showUserDetails(item)}>Show Details</button>
          <button onClick={() => showDeletePopup(item)}>Delete</button>
          <button onClick={() => goToUpdate(item)}>Update</button>
        </div>

        <hr />
      </div>
    ))}

    </div>
  );
}
