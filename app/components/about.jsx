import Image from "next/image";

export default function About() {
  return (
    <div className="grid place-items-center mt-[7.13rem]">
      <div className="w-full w-[22.1875rem] md:w-[60rem]">
        <h1
          id="about"
          className="text-5xl text-center font-bold mr-[1rem] ml-[1rem]"
        >
          About La-Restaurante
        </h1>
        <div className="flex flex-col md:flex-row mt-[2.25rem] px-4 md:px-12">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-base font-semibold mb-4">
              La-Restaurante was founded by Antonio Rossi, a passionate chef
              from Naples, Italy, who spent years perfecting his craft and
              exploring flavours across Europe and the U.S.
            </p>
            <p className="text-base font-semibold mb-4">
              Inspired by the art of Neapolitan pizza and his commitment to
              using only the finest ingredients, Antonio opened La-Restaurante
              with one mission: to serve the best food possible.
            </p>
            <p className="text-base font-semibold mb-4">
              Every dish, from hand-crafted pizzas to traditional pastas, is
              made with love and care, offering customers a true taste of Italy.
            </p>
            <p className="text-base font-semibold mb-4">
              At La-Restaurante, Antonio believes that great food brings people
              together, and he’s dedicated to creating memorable meals for every
              guest.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-[25.06rem] aspect-square overflow-hidden rounded">
              <Image
                className="absolute inset-0 object-cover w-full h-full"
                src="/la-restaurante-front-facade.webp"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
