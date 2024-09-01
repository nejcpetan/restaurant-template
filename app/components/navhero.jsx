'use client'

import { Pizza } from "lucide-react";

export default function NavHero() {
    return (
      <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="minimum-scale=1, initial-scale=1, width=device-width"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "header {background:url('https://images.unsplash.com/photo-1590534247856-1e343c738d02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');} "
    }}
  />
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
  <header
    id="up"
    className="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
  >
    {/* Overlay Background + Center Control */}
    <div
      className="h-screen bg-opacity-50 bg-black flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.1)" }}
    >
      <div className="mx-2 text-center">
        <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
          The Best 
        </h1>
        <h1 className="text-gray-200 font-extrabold text-4xl xs:text-5xl md:text-6xl leading-tight">
        Pizza in Town
        </h1>
        <div className="inline-flex">
          <button className="p-2 my-5 mx-2 bg-primary hover:bg-secondary font-bold text-white rounded border-2 border-transparent hover:border-white shadow-md transition duration-500 md:text-xl">
            Learn More
          </button>
        </div>
        
      </div>
    </div>
  </header>
</>

    
    
       
    );
}