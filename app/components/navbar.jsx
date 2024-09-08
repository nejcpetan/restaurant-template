"use client";
import { Pizza, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="p-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Pizza className="w-7 h-7 mr-2" />
            <img
              className="w-[15.0625rem]"
              src="/logo/png/logo-no-background.png"
              alt="logo"
            />
          </div>

          {/* Burger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <img
                src={
                  menuOpen
                    ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+"
                    : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lbnUiPjxsaW5lIHgxPSI0IiB4Mj0iMjAiIHkxPSIxMiIgeTI9IjEyIi8+PGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjYiIHkyPSI2Ii8+PGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjE4IiB5Mj0iMTgiLz48L3N2Zz4="
                }
                alt="menu icon"
                className="w-7 h-7"
              />
            </button>
          </div>

          {/* Menu for Larger Screens */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <Button variant="link" asChild>
                <Link href="#about">About</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="#favorites">Favorites</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="#menu">Menu</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="#our-location">Our Location</Link>
              </Button>
            </li>
            <li>
              <Button className="rounded-full h-[2.50rem] w-[7rem]" asChild>
                <Link href="tel:123-456-7890">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </Link>
              </Button>
            </li>
          </ul>
        </div>

        {/* Dropdown Menu for Mobile */}
        {menuOpen && (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Button variant="link" asChild>
                  <Link href="#about">About</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="#favorites">Favorites</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="#menu">Menu</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="#our-location">Our Location</Link>
                </Button>
              </li>
              <li>
                <Button className="rounded-full h-[2.50rem] w-[7rem]" asChild>
                  <Link href="tel:123-456-7890">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <hr className="solid"></hr>
    </div>
  );
};

export default Navbar;
