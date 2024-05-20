// import React, { useState } from "react";
// import CustomModal from "../Modals/showDetailsModal";
// // import "./Test.css";


// export const Test3 = () => {
//   const users = [
//     { name: 'John Doe', email: 'john@example.com', contact: '123-456-7890' },
//     { name: 'Jane Smith', email: 'jane@example.com', contact: '987-654-3210' },
//     { name: 'Bob Johnson', email: 'bob@example.com', contact: '555-123-4567' }
//   ];

//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   function toggleModal() {
//     setIsOpen(!modalIsOpen);
//   }

//   // function showUserDetails(user) {
//   //   setSelectedUser(user);
//   //   toggleModal();
//   // }

//   return (
//     <div>
//       {users.map((user, index) => (
//         <div key={index}>
//           <h2>{user.name}</h2>
//           <p>Email: {user.email}</p>
//           <p>Contact: {user.contact}</p>
//           {/* <button onClick={() => showUserDetails(user)}>Show details in Popup</button> */}
//           <hr />
//         </div>
//       ))}

//       <CustomModal
//         isOpen={modalIsOpen}
//         onRequestClose={toggleModal}
//         user={selectedUser}
    
//       />
//     </div>
//   );
// };
