import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <>
      <footer className="w-full pt-20 pb-10" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-90 "
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-green-500">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-gray-800 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:contact@jsmastery.pro">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row  justify-between items-center">
          <p className=" text-black text-sm md:font-normal font-light">
            Copyright © 2024 Pedram Vosooghinia
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className=" bg-black-100 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image
                  src={info.img}
                  alt="icons"
                  className="  "
                  width={20}
                  height={20}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
