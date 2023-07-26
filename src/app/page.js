import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold">Home Page</h1>
      <Link href="/signUp">Sign Up</Link>
      <Link href="/login">Login</Link>
    </>
  );
}
