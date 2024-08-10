"use client";

import React from "react";

import {  testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 ">
      <h1 className="heading">
        Kind words from
        <span className="text-green-500"> satisfied clients</span>
      </h1>

        <div
          className="flex flex-col items-center justify-center mt-8 "
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />     
      </div>
    </section>
  );
};

export default Clients;
