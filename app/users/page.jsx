"use client";
import { useEffect, useState } from "react";
import UserList from "../../components/UserList";
import styles from "./page.module.css";
import usersData from "../../data/users.json";

function UsersPage() {
  const [users, setUsers] = useState(null);
  useEffect(() => setUsers(usersData), []);
  return (
    <div className="UsersPage">
      <h1>User list</h1>
      <UserList users={users} />
      <h1>Hello World !</h1>
    </div>
  );
}

export default UsersPage;
