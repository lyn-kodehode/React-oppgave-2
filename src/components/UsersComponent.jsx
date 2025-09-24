import styles from "../styles/Users.module.css";
import { useState } from "react";

export default function UsersComponent() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [...existingUsers] = mockData;
  const [users, setUsers] = useState(existingUsers);
  const [newUser, setNewUser] = useState({});

  const addUser = (event) => {
    const { name, value } = event.target;
    setNewUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAddUser = () => {
    if (!newUser.email || !newUser.username) {
      window.alert("Please fill out all fields.");
      return;
    }

    setUsers((prev) => [...prev, newUser]);

    setNewUser({});
  };

  return (
    <>
      <div className={styles.usersContainer}>
        {users.map((user, index) => {
          return (
            <li className={styles.userItem} key={index}>
              <p>
                Username: <span>{user.username}</span>{" "}
              </p>
              <p>
                Email: <span>{user.email}</span>
              </p>
            </li>
          );
        })}
      </div>
      <div className={styles.userControl}>
        <input
          type="text"
          name="username"
          // value={newUser.username}
          value={newUser.username || ""}
          onChange={addUser}
          placeholder="Enter name..."
        />
        <input
          type="email"
          name="email"
          // value={newUser.email}
          value={newUser.email || ""}
          onChange={addUser}
          placeholder="Enter email..."
        />
        <button
          className={styles.addUserBtn}
          // onClick={() => setUsers((prev) => [...prev, newUser])}
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>
    </>
  );
}
