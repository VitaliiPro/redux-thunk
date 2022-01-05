import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <header>
      <NavLink to="/users" className="link-nav">
        Users
      </NavLink>
      <NavLink to="addUser" className="link-nav">
        Add User
      </NavLink>
    </header>
  );
};


