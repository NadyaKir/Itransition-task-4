import React, { useState, useEffect } from "react";
import axios from "axios";

import Toolbar from "../components/ToolBar";
import UserTable from "../components/UsersTable";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/getAllUsers"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col">
      <Toolbar />
      <UserTable users={users} />
    </div>
  );
}
