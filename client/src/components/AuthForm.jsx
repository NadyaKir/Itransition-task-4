import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = ({
  onSubmit,
  buttonText,
  buttonColor,
  helpText,
  linkText,
  isRegistrationPage,
  error,
}) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, email, password });
  };

  const onLinkClick = () => {
    isRegistrationPage ? navigate("/signin") : navigate("/register");
  };

  return (
    <div className="flex justify-center items-center h-full flex-1">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSubmit}
      >
        {error && (
          <div className="text-red-600 mb-2 mt-4 text-center w-full max-w-sm">
            {error}
          </div>
        )}
        {isRegistrationPage && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-between">
          <button
            className={`bg-${buttonColor}-500 hover:bg-${buttonColor}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
          >
            {buttonText}
          </button>
          <span className="text-sm mt-2">
            {helpText}{" "}
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={onLinkClick}
            >
              {linkText}
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
