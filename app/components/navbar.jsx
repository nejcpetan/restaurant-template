import { Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav className="p-2">
        <div className="grid grid-cols-2">
          <div className="col-span-1 ">
            <ul className="flex justify-start pl-2 pt-2">
              <li className="mr-2">
                <Pizza className="w-7 h-7" />
              </li>

              <li className="mr-6">
                <img
                  className="w-[241px] h-[20px] "
                  src="/logo/png/logo-no-background.png"
                  alt="logo"
                />
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="flex justify-end">
              <li className="mr-2">
                <Button variant="link" asChild>
                  <Link href="#about">About</Link>
                </Button>
              </li>
              <li className="mr-2">
                <Button variant="link" asChild>
                  <Link href="#menu">Menu</Link>
                </Button>
              </li>
              <li className="mr-6">
                <Button variant="link" asChild>
                  <Link href="#our-location">Our Location</Link>
                </Button>
              </li>
              <li className="mr-6">
                <Button variant="" asChild>
                  <Link href="tel:123-456-7890">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr class="solid"></hr>
    </div>
  );
}
