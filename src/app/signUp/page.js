import { LoginByGoogle } from "@/components/LoginByGoogle";
import Link from "next/link";

const Signup = () => {
  return (
    <>
      <h3 className="font-bold">SignUp Page</h3>
      <LoginByGoogle />
      <Link className="mr-2.5" href="/login">
        Login
      </Link>
      <Link href="/">Home</Link>
    </>
  );
};

export default Signup;
