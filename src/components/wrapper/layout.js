import { Header } from "../common/header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col max-w-md m-auto height md:grid md:place-items-center">
      <div className="flex flex-col md:h-[850px] md:w-full md:flex md:flex-col flex-grow md:shadow-2xl md:rounded-2xl">
        <Header />
        <main
          id="main"
          className="flex flex-col flex-grow px-10 mb-10 overflow-x-hidden"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
