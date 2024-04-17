import axios from "axios";

const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/getAllUsers");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export default fetchUsers;
