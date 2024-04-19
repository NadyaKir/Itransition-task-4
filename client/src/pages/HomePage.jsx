import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import fetchUsers from "../api/fetchUsers";
import Toolbar from "../components/ToolBar";
import UserTable from "../components/UsersTable";

export default function HomePage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const userData = await fetchUsers();
      setUsers(userData);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedUsers(selectAll ? [] : users.map((user) => user._id));
  };

  const handleSelectUser = (userId) => {
    const newSelectedUsers = selectedUsers.includes(userId)
      ? selectedUsers.filter((id) => id !== userId)
      : [...selectedUsers, userId];

    setSelectedUsers(newSelectedUsers);
    setSelectAll(newSelectedUsers.length === users.length);
  };

  const handleDelete = async () => {
    const loggedInUserEmail = localStorage.getItem("email");

    const selectedUserEmail = users.find((user) =>
      selectedUsers.includes(user._id)
    ).email;

    if (loggedInUserEmail === selectedUserEmail) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      navigate("/signin");
    }

    try {
      const deletePromises = selectedUsers.map(async (userId) => {
        const response = await axios.delete(
          `http://localhost:8000/api/deleteUser/${userId}`
        );
        return response.data;
      });

      await Promise.all(deletePromises);
      fetchData();
    } catch (error) {
      console.error("Error deleting users:", error);
    }
  };

  const handleStatusChange = async (status) => {
    const loggedInUserEmail = localStorage.getItem("email");

    const selectedUserEmail = users.find((user) =>
      selectedUsers.includes(user._id)
    ).email;

    if (loggedInUserEmail === selectedUserEmail && status === "blocked") {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      navigate("/signin");
    }
    console.log(selectedUsers);
    try {
      const response = await axios.put(
        `http://localhost:8000/api/updateUserStatus`,
        { userIds: selectedUsers, status }
      );
      setSelectedUsers([]);
      fetchData();
      return response.data;
    } catch (error) {
      console.error("Error updating users:", error);
    }
  };

  return (
    <div className="flex-1 flex-col flex">
      <Toolbar
        onDelete={handleDelete}
        onBlock={() => handleStatusChange("blocked")}
        onUnblock={() => handleStatusChange("active")}
      />
      <UserTable
        users={users}
        selectedUsers={selectedUsers}
        onSelectAll={handleSelectAll}
        onSelectUser={handleSelectUser}
        isLoading={isLoading}
      />
    </div>
  );
}
