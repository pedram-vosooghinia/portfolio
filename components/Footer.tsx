import { FaLocationArrow, FaClipboard } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import toast from "react-hot-toast";
const Footer = () => {
  const email = "p.vosooghinia69@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Email copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy email: ", err);
      });
  };
  return (
    <>
      <footer className="w-full pt-40 pb-10" id="contact">


        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-green-500">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-gray-800 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <div className="relative">
            <a
              href="mailto:p.vosooghinia69@gmail.com"
              className="block md:hidden"
            >
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <div className="flex justify-center items-center">
              <p className="hidden md:block text-xl font-bold">
                email: p.vosooghinia69@gmail.com
              </p>
              <button
                onClick={copyToClipboard}
                className="hidden  md:block  md:top-1/2 md:right-4 mx-2 p-2 rounded-lg bg-black-200 text-white hover:bg-blue-700"
              >
                <FaClipboard />
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-16 md:flex-row  justify-between items-center">
          <p className=" text-black text-sm md:font-normal font-light">
            Copyright © 2024 Pedram Vosooghinia
          </p>

          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <Link href={info.link} key={info.id}>
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
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
