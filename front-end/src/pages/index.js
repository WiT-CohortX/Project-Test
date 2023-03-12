import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Finance App</title>
      </Head>
      <main>
        
        <Link href="/signUp" className="text-3xl font-bold">Sign Up</Link>

        <Link href="/loginIn" className="text-3xl font-bold">Login In</Link>
        
      </main>
    </>
  )
}
