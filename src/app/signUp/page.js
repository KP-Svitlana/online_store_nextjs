import Link from "next/link";

const Signup = () => {
  return (
    <>
      <h3 className="font-bold">SignUp Page</h3>
      <Link href="/login">Login</Link>
      <Link href="/">Home</Link>
    </>
  );
};

export default Signup;
