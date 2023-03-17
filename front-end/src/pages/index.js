import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="logo">
        <span className="text-Primary800">LO</span>
        <span className="text-Secondary">GO</span>
      </h1>
      <div className="w-full max-w-[200px] h-[200px] bg-gray-300 m-auto relative">
        <span className="bg-dollarCoin bg-contain absolute w-20 h-20 top-[110%] left-[-50%]"></span>
        <span className="bg-dollarCoin bg-contain absolute w-20 h-20 top-[-0%] right-[-50%]"></span>
        <span className="bg-dollarCoin bg-contain absolute w-20 h-20 top-[-65%] left-[-50%]"></span>
      </div>
      <Link href="/signUp" className="backgroundLink">
        Let's Go
      </Link>

      <p className="text-center">
        Already have an account ? <Link href="/loginIn" className="simpleLink">Login In
      </Link>
      </p>
      
    </>
  );
}
