import AuthForm from "../components/AuthForm";

export default function SignInPage() {
  const handleLogin = () => {};

  return (
    <AuthForm
      onSubmit={handleLogin}
      buttonText="Sign In"
      buttonColor="blue"
      helpText="Don't have an account?"
      linkText="Sign up"
      isRegistrationPage={false}
    />
  );
}
