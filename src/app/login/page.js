import Link from "next/link";

const Login = () => {
  return (
    <>
      <h3 className="font-bold">Login Page</h3>
      <Link className="mr-2.5" href="/signUp">
        Sign Up
      </Link>
      <Link href="/">Home</Link>
    </>
  );
};

export default Login;
