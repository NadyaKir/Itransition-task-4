import axios from "axios";
import moment from "moment";

const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/getAllUsers");
    const usersData = response.data;

    const users = usersData.map((userData) => {
      const formattedRegistrationDate = moment(
        userData.registrationDate
      ).format("MMMM Do YYYY, h:mm:ss a");
      const formattedLastLoginDate = userData.lastLoginDate
        ? moment(userData.lastLoginDate).format("MMMM Do YYYY, h:mm:ss a")
        : null;

      return {
        ...userData,
        registrationDate: formattedRegistrationDate,
        lastLoginDate: formattedLastLoginDate,
      };
    });

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default fetchUsers;
