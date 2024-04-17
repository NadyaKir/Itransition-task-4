import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = async (name, email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/api/create", {
        name,
        email,
        password,
      });
      navigate("/signin");

      if (!response.data.success) {
        throw new Error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthForm
      onSubmit={handleRegister}
      buttonText="Register"
      buttonColor="green"
      helpText="Already have an account?"
      linkText="Sign in"
      isRegistrationPage={true}
    />
  );
}
