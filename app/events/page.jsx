import React from "react";
import img from "../assets/3.jpg";
import Image from "next/image";

const Events = () => {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <div className="w-screen px-[7%] flex max-md:flex-col gap-32 h-[calc(67%-88px)] max-lg:h-[calc(67%-100px)] max-md:max-md:h-[calc(67%-80px)] bg-main rounded-b-xl shadow-xl top-[88px] max-md:top-[80px] max-lg:top-[100px] relative min-h-fit pb-6">
        <div className="flex w-full gap-6 min-h-fit">
          <div className="w-1/2 h-4/5 pt-2">
            <Image
              src={img}
              alt=""
              className="object-cover rounded-xl h-full"
            />
          </div>
          <div className="pt-12 w-1/2 text-white min-h-fit">
            <h1 className="text-2xl">this is the event</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              porro inventore rem aperiam delectus minus, accusamus consequuntur
              pariatur fugiat non soluta! Inventore quisquam dolore hic modi
              repellendus voluptatem vero rerum ad voluptates dolorem
              dignissimos animi sequi odit, blanditiis natus reiciendis, quidem,
              laborum velit in quos consectetur? Minima aliquam quasi, nobis cum
              nisi inventore ut fugit odit saepe ab sit delectus voluptate atque
              quas iure qui impedit eligendi voluptas nihil! Iusto vitae dolorum
              sapiente inventore adipisci in laudantium eum totam error.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Events;
