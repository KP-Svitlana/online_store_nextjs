import Link from "next/link";

import Products from "@/pages/Products";

export default function Home() {
  return (
      <>
          <>
              <h1 className="font-bold">Home Page</h1>
              <Link className="mr-2.5"  href="/signUp">
                  Sign Up
              </Link>
              <Link href="/login">Login</Link>
          </>
          <Products />
      </>
  );
}
