import React from "react";
import { getUsers } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./Users.css";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="user-wrapper">
      {users.map((user) => {
        return (
          <div key={user.id} className="user">
            <div className="img-block">
              <img src={user.avatar} alt={user.name} className="image" />
            </div>
            <div>{user.name}</div>
            <div>{user.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
