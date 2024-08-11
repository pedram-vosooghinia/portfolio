"use client";

import React from "react";
import { testimonials } from "@/data";
import useLanguageStore from "@/store/LanguageStore";
import { Carousel } from "flowbite-react";

const Clients = () => {
  const { language } = useLanguageStore();
  const translations = {
    en: {
      heading1: "Kind words from",
      heading2: "satisfied clients",
    },
    fa: {
      heading1: "نظرات مثبت از",
      heading2: "مشتریان رضایتمند",
    },
  };

  const { heading1, heading2 } = translations[language] || translations.en;

  return (
    <section id="testimonials" className="py-20">
        <div className=" py-20 heading flex justify-center items-center gap-2 flex-wrap">
        <div>{heading1}</div>
        <div className="text-green-500">{heading2}</div>
      </div>

    <div className="ltr grid h-80 grid-cols-1  sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-6 bg-black-100 dark:bg-red-400 rounded-lg"
            >
              <blockquote className="text-center text-gray-200 dark:text-black-100 ">
                <p className="text-lg">{language === "fa" ? item.quoteFa : item.quote}</p>
                <footer className="mt-4">
                  <span className="block text-xl font-bold">{language === "fa" ? item.nameFa : item.name}</span>
                  <span className="block text-sm text-black-100">{language === "fa" ? item.titleFa : item.title}</span>
                </footer>
              </blockquote>
            </div>
          ))}
        </Carousel>
      </div>

    </section>
  );
};

export default Clients;
