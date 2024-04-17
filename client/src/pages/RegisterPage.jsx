import AuthForm from "../components/AuthForm";

export default function RegisterPage() {
  const handleRegister = () => {};

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
