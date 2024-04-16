import AuthForm from "../components/AuthForm";

export default function SignInPage() {
  const handleLogin = () => {};
  const switchToRegister = () => {};

  return (
    <AuthForm
      onSubmit={handleLogin}
      buttonText="Sign In"
      buttonColor="blue"
      linkText="Don't have an account?"
      onLinkClick={switchToRegister}
    />
  );
}
