// Next
import Link from "next/link";

// Components
import SignUp from "@/components/forms/signUp";

export default function SignUpPage() {
  return (
    <>
      <h1 className="h1">Sign Up</h1>
      <SignUp />
      <p className="text-center">
        Already have an account ? <Link href="/loginIn" className="simpleLink">Login In</Link>
      </p>
    </>
  );
}
