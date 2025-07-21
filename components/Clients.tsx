import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading text-center text-[40px] font-bold md:text-5xl lg:text-6xl">
        Kind words from
        <span className="text-purple-300"> satisfied clients</span>
      </h1>
      <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex gap-2 max-w-32 md:max-w-60">
              <img className="md:w-10 w-5" src={img} alt={name} />
              <img className="md:w-24 w-20" src={nameImg} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
