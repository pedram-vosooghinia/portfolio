"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
const RecentProjects = () => {
  return (
    <div  id="projects" className=" w-full">
      <h1 className="heading py-20">
        A small selection of{" "}
        <span className="text-green-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 my-8  ">
        {projects.map((item) => (
          <>
            <div
              className=" flex flex-col w-96 flex-wrap justify-center items-center  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] p-4  "
              key={item.id}
            >
              <div className="relative flex items-center justify-center ">
                <div
                  className="relative "
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    // src="./../public/bg.png"
                    src="./bg.png"
                    alt="bgimg"
                    width={350}
                    height={350}
                    priority={true}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute px-4"
                  width={300}
                  height={300}
                  priority={true}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl  line-clamp-1">
                {item.title}
              </h1>

              <p className=" lg:text-xl lg:font-normal font-light text-sm line-clamp-2 ">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 ">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${6 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        className="p-1"
                        width={100}
                        height={100}
                        priority={true}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex  text-lg text-green-500 mx-1">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="" color="#22c55e" />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
