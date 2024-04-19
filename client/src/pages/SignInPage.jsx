import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function SignInPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
      console.log("Logged in successfully:", token);
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError("Internal server error. Please try again later.");
      }
    }
  };

  return (
    <AuthForm
      onSubmit={handleLogin}
      buttonText="Sign In"
      buttonColor="blue"
      helpText="Don't have an account?"
      linkText="Sign up"
      isRegistrationPage={false}
      error={error}
    />
  );
}
