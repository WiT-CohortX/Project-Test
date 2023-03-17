// Next
import Link from "next/link";

// Components
import SignIn from "@/components/forms/signIn";

export default function LogInPage() {
  return (
    <>
      <h1 className="h1">Welcome Back!</h1>
      <SignIn />
      <p className="text-center">
        Dont have an account? <Link href="/signUp" className="simpleLink">Sign Up</Link>
      </p>
    </>
  );
}
