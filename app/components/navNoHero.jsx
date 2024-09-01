import { Pizza } from "lucide-react";

export default function NavNoHero() {
    return (
        <div>
            
  <nav
    id="nav"
    className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
  >
    <div className="p-4">
      <div className="font-extrabold tracking-widest text-xl">
        <a href="/" className="transition duration-500 hover:text-indigo-500">
          La-Pizzeria
        </a>
      </div>
    </div>
    {/* Nav Items Working on Tablet & Bigger Sceen */}
    <div className="p-4 hidden md:flex flex-row justify-between font-bold">
      <a
        id="hide-after-click"
        href="/"
        className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
      >
        About
      </a>
      <a
        href="/about"
        className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
      >
        Contact Us
      </a>
      <a
        href="#contactus"
        className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
      >
        <button className="btn btn-primary"> <Pizza/> Call Us
        </button>
      </a>
    </div>
    {/* Burger Nav Button on Mobile */}
    <div id="nav-open" className="p-4 md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-menu"
      >
        <line x1={3} y1={12} x2={21} y2={12} />
        <line x1={3} y1={6} x2={21} y2={6} />
        <line x1={3} y1={18} x2={21} y2={18} />
      </svg>
    </div>
  </nav>
  {/* Opened Nav in Mobile, you can use javascript/jQuery */}
  <div
    id="nav-opened"
    className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
  >
    <div className="p-2 divide-y divide-gray-600 flex flex-col">
      <a href="#home" className="p-2 font-semibold hover:text-indigo-700">
        Home
      </a>
      <a href="#about" className="p-2 font-semibold hover:text-indigo-700">
        About
      </a>
      <a href="#contactus" className="p-2 font-semibold hover:text-indigo-700">
        Contact Us
      </a>
      <a href="#products" className="p-2 font-semibold hover:text-indigo-700">
        Products
      </a>
    </div>
  </div>
  
        </div>
    );
}