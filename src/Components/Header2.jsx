import React from "react";
import "./Header2.css";
import { searchUser } from "../ReduxToolkit/UserumarSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header2() {

  const {searchQuery} = useSelector(state=>state.app);
  const dispatch = useDispatch();
  const handleSearchInput = (e) => {
    console.log(e.target.value);
    dispatch(searchUser(e.target.value));
  }
  return (
    <nav>
      <ul>

        <li>About</li>
        <li>Contact</li>
        <li>

          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={handleSearchInput}
          />
        </li>
      </ul>
    </nav>
  );
}
