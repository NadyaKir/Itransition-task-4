import AuthForm from "../components/AuthForm";

export default function RegisterPage() {
  const handleRegister = () => {};
  const switchToLogin = () => {};

  return (
    <AuthForm
      onSubmit={handleRegister}
      buttonText="Register"
      buttonColor="green"
      linkText="Already have an account?"
      onLinkClick={switchToLogin}
    />
  );
}
