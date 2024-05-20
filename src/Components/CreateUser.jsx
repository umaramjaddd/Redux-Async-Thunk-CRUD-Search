import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createUser } from "../ReduxToolkit/UserumarSlice";
import { Link } from "react-router-dom";

export default function CreateUser() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState({});

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
  }
  return (
    <Form className="w-50 mx-auto my-auto" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          placeholder="Enter name"
          onChange={getUserData}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={getUserData}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          name="age"
          placeholder="Enter age"
          onChange={getUserData}
        />
      </Form.Group>

      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          onChange={getUserData}
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
        />
        <label className="form-check-label">Female</label>
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    
    
 <Link to="/"><Button>All Users</Button></Link>
    </Form>

    
  );
}
