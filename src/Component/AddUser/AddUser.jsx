import React from "react";
import { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  const onCreateUser = async (event) => {
    event.preventDefault();
    await fetch(`http://domer.tech:9999/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: name,
        username: username,
        avatar: avatar,
      }),
    });
    setName("");
    setUserName("");
    setAvatar("");
  };

  return (
    <div>
      <form onSubmit={onCreateUser}>
        <input
          type="text"
          placeholder="User name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="User nickname with @"
          value={username}
          onChange={(e) => {
            if (e.target.value[0] === "@") {
              setUserName(e.target.value);
            } else {
              setUserName("@" + e.target.value);
            }
          }}
        />
        <input
          type="text"
          placeholder="Avatar link"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button type="submit" onClick={onCreateUser}>
          Add user
        </button>
      </form>
    </div>
  );
}

export default AddUser;
