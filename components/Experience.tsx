import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";
import useLanguageStore from "@/store/LanguageStore";

const Experience = () => {
  const { language } = useLanguageStore();

  return (
    <div className="py-20 w-full " id="experience">
      <h1 className="heading">
        {language === 'fa' ? 'تجربیات کاری ' : 'My '}
        <span className="text-green-500">
          {language === 'fa' ? 'من' : 'work experience'}
        </span>
      </h1>

      <div className="dark:bg-red-500 w-full mt-12 px-4 py-4 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "mt-8 linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className=" p-2 flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center  md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
                width={100}
                height={100}
                priority={true}
                style={{ width: "100", height: "100" }}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-white-100 text-xl md:text-2xl font-bold">
                  {card.title[language]}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc[language]}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
