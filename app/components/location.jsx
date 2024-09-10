import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Location() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 mt-[5.06rem] mb-[3.31rem] mr-[1rem] ml-[6rem]">
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.6310165708405!2d15.735541977329344!3d46.337019374779864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765884a06b54431%3A0x96fa952e0bd47c45!2zR29zdGnFocSNZSAmIFBpY2VyaWphIMWgcGFqemE!5e0!3m2!1sen!2ssi!4v1725961818238!5m2!1sen!2ssi"
          width="800"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="ml-0 lg:ml-10">
        <h1 className="text-5xl text-center font-bold">Call Us</h1>
        <h2 className="text-3xl text-center font-bold">
          Call us at +123 456 7890
        </h2>
        <h3 className="text-2xl text-center font-bold mt-6">
          Or tap on the button below
        </h3>
        <Button
          className="rounded-full h-[2.50rem] w-[7rem] flex items-center justify-center mx-auto mt-4"
          asChild
        >
          <Link href="tel:123-456-7890">
            <Phone className="h-5 w-5 mr-2" />
            Call Us
          </Link>
        </Button>
      </div>
    </div>
  );
}
