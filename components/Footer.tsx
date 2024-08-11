import { FaLocationArrow, FaClipboard } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import toast from "react-hot-toast";
import useLanguageStore from "@/store/LanguageStore";

const Footer = () => {
  const { language } = useLanguageStore();

  const email = "p.vosooghinia69@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success(
          language === "fa" ? "ایمیل به کلیپبورد کپی شد!" : "Email copied to clipboard!"
        );
      })
      .catch((err) => {
        toast.error(
          language === "fa"
            ? "کپی کردن ایمیل ناموفق بود: "
            : "Failed to copy email: ",
          err
        );
      });
  };

  return (
    <>
      <footer
        className={`${language === "fa" ? "rtl" : "ltr"} w-full pt-36 pb-10 `}
        id="contact"
      >
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            {language === "fa" ? (
              <>
                آماده‌اید <span className="text-green-500">کسب و کار دیجیتال</span> خود را 
                متحول کنید؟
              </>
            ) : (
              <>
                Ready to transform <span className="text-green-500">your</span>{" "}
                digital business ?
              </>
            )}
          </h1>
          <p className="pt-36 text-gray-800 dark:text-gray-100 md:mt-10 my-5 text-center">
            {language === "fa"
              ? "همین امروز با من تماس بگیرید تا در مورد اینکه چگونه می‌توانم به شما در دستیابی به اهداف‌تان کمک کنم صحبت کنیم."
              : "Reach out to me today and let's discuss how I can help you achieve your goals."}
          </p>
          <div className="relative">
            <a
              href="mailto:p.vosooghinia69@gmail.com"
              className="block md:hidden"
            >
              <MagicButton
                title={language === "fa" ? "ارسال ایمیل" : "Let's get in touch"}
                icon={<FaLocationArrow />}
                position={language === "fa" ? "left" : "right"}
              />
            </a>
            <div className="flex justify-center items-center">
              <p className="hidden md:block text-xl font-bold">
                {language === "fa" ? (
                  <>
                    ایمیل:{" "}
                    <span className="text-green-500">p.vosooghinia69@gmail.com</span>
                  </>
                ) : (
                  <>
                    email:{" "}
                    <span className="text-green-500">p.vosooghinia69@gmail.com</span>
                  </>
                )}
              </p>
              <button
                onClick={copyToClipboard}
                className="hidden md:block mx-2 p-2 rounded-lg bg-black-200 text-white hover:bg-blue-700"
              >
                <FaClipboard />
              </button>
            </div>
          </div>
        </div>
        <div className="flex pb-10 mt-16 px-4 md:flex-row justify-between items-center">
          <p className="text-black dark:text-red-500 text-sm md:font-normal font-light">
            {language === "fa"
              ? "کلیه حقوق محفوظ است © 2024 پدرام وثوقی نیا"
              : "Copyright © 2024 Pedram Vosooghinia"}
          </p>

          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <Link href={info.link} key={info.id}>
                <div
                  key={info.id}
                  className="bg-black-100 dark:bg-red-500 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image
                    src={info.img}
                    alt="icons"
                    className=" "
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
