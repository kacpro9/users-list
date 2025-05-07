import React, { use, useEffect, useState } from "react";
import "./UserList.css";
import ButtonsPanel from "./ButtonsPanel";

const UserList = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    usertype: "admin",
  });

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userType, setUserType] = useState(props.userTypeInit);

  useEffect(() => {
    const filtered = users.filter(
      (user) => user.usertype === userType || userType === "all"
    );
    setFilteredUsers(filtered);
    console.log("zmiana filteredUsers");
  }, [userType]);

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setFormData((prevDataForm) => {
      return {
        ...prevDataForm,
        [name]: target.value,
      };
    });
  };

  const showUserType = (action) => {
    if (action === "admin") {
      console.log("zmaina na admin");
      setUserType("admin");
    } else if (action === "user") {
      console.log("zmiana na user");
      setUserType("user");
    } else if (action === "all") {
      console.log("zmiana na all");
      setUserType("all");
    }
  };

  const setUser = (e) => {
    e.preventDefault();
    setUsers(users.concat({ ...formData, id: Date.now() }));
  };

  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  console.log(users);
  console.log(filteredUsers);
  console.log(userType);
  console.log("--");

  return (
    <div className="usersList">
      <form onSubmit={setUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User name"
          onChange={handleInputChange}
          value={formData.username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="username"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="usertype">User Type</label>
        <select
          name="usertype"
          id="usertype"
          onChange={handleInputChange}
          value={formData.usertype}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button>Save</button>
      </form>
      <ButtonsPanel showUserType={showUserType} />
      <div className="list">
        {filteredUsers.map((user) => {
          return (
            <div
              className="userItem"
              key={user.id}
              onClick={() => removeUser(user.id)}
            >
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.usertype}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
