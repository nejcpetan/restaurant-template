import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-3xl sm:text-1xl md:text-3xl font-black mt-[3rem] ml-[2rem] md:mt-[9.625rem] md:ml-[4.375rem] m-10">
          <h1>
            <span>The&nbsp;</span>
            <span className="text-red-600">best pizza&nbsp;</span>
          </h1>
          <h1>
            <span className="font-normal">you have ever&nbsp;</span>
            <span className="font-normal text-red-600">tried</span>
            <span className="font-normal">!</span>
          </h1>
          <h1 className="font-normal text-xl sm:text-1xl md:text-3xl mt-6">
            Taste the genuine Italian cuisine and the tastiest Naples style
            pizza!
          </h1>
          <Link href="#menu">
            <Button className="shadow-2xl flex items-center justify-center mt-[1.63rem] rounded-full w-[9.25rem] h-[3.19rem]">
              Menu
            </Button>
          </Link>
        </div>
        <div className="m-[1.9375rem] md:mr-[4.375rem] flex items-center justify-center h-full">
          <Image
            className="drop-shadow-xl w-[28.56rem] h-auto"
            src="/AdobeStock_602785827.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
