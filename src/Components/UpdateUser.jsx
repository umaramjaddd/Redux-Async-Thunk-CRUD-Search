import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateUser } from "../ReduxToolkit/UserumarSlice";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function UpdateUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = location.state.user;
  const [users, setUsers] = useState(user);
  // console.log(user);

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
    // setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(users));
    navigate('/');
  };
  return (
    <Form className="w-50 mx-auto my-auto" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          placeholder="Enter name"
          onChange={getUserData}
          value={users.name}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={getUserData}
          value={users.email}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          name="age"
          placeholder="Enter age"
          onChange={getUserData}
          value={users.age}
        />
      </Form.Group>

      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          onChange={getUserData}
          checked={users.gender === "Male"}
          required
        />
        <label className="form-check-label">Male</label>
      </div>
      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          value="Female"
          type="radio"
          onChange={getUserData}
          checked={users.gender === "Female"}
        />
        <label className="form-check-label">Female</label>
      </div>

      <Button variant="primary" type="submit">
        Update
      </Button>

      <Link to="/">
        <Button>All Users</Button>
      </Link>
    </Form>
  );
}
