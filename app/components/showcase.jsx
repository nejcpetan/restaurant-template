import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Showcase() {
  return (
    <div>
      <h1
        id="favorites"
        className="text-5xl text-center font-bold mx-4 md:mx-0"
      >
        Try our all-time favourites!
      </h1>
      <div className="flex justify-center mt-[1.75rem]">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full max-w-6xl px-4">
          <div className="drop-shadow-2xl">
            <Card className="opacity-95 bg-zinc-900 text-white md:h-[35rem] lg:h-[30rem]">
              <div className="flex justify-center p-4">
                <Image
                  className="w-[12rem] h-auto"
                  src="/calamari-section.png"
                  alt="Calamari"
                />
              </div>
              <CardHeader className="text-3xl font-medium text-center">
                Calamari
              </CardHeader>
              <CardContent>
                <p>
                  Crispy, golden calamari served with a zesty lemon aioli.
                  Perfectly seasoned and tender, it's a seafood lover's delight
                  with every bite.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="drop-shadow-2xl">
            <Card className="opacity-95 bg-zinc-900 text-white md:h-[35rem] lg:h-[30rem]">
              <div className="flex justify-center p-4">
                <Image
                  className="w-[12rem] h-auto"
                  src="/pizza-section.png"
                  alt="Pizza"
                />
              </div>
              <CardHeader className="text-3xl font-medium text-center">
                Pizza
              </CardHeader>
              <CardContent>
                <p>
                  Freshly baked pizza with a crisp crust, gooey mozzarella, and
                  your favourite toppings. Our pizzas are crafted to satisfy.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="drop-shadow-2xl">
            <Card className="opacity-95 bg-zinc-900 text-white md:h-[35rem] lg:h-[30rem]">
              <div className="flex justify-center p-4">
                <Image
                  className="w-[12rem] h-auto"
                  src="/crepes-section.png"
                  alt="Desserts"
                />
              </div>
              <CardHeader className="text-3xl font-medium text-center">
                Desserts
              </CardHeader>
              <CardContent>
                <p>
                  Indulge in our decadent desserts, from creamy tiramisu to rich
                  chocolate cake. Each sweet treat is a perfect way to end your
                  meal on a high note.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
