import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import useLanguageStore from "@/store/LanguageStore";

const Hero = () => {
  const { language } = useLanguageStore();

  const translations = {
    en: {
      tagline: "Dynamic Web Magic with Next.js",
      mainText: "Transforming Concepts into Seamless User Experiences",
      greeting: "Hi! I'm Pedram, a Next.js Developer.",
      textDirection: "ltr", // جهت متن
    },
    fa: {
      tagline: "جادوی وب پویا با نکست‌جی‌اس",
      mainText: "تبدیل مفاهیم به تجربیات کاربری",
      greeting: "سلام! من پدرام هستم، یک توسعه‌دهنده نکست‌جی‌اس.",
      textDirection: "rtl", // جهت متن
    },
  };

  const { tagline, mainText, greeting, textDirection } =
    translations[language] || translations.en;

  return (
    <section className="h-screen py-64 md:py-40" id="up">
      <div
        className="h-screen w-full bg-yellow-400  
       absolute top-0 left-0 flex items-center justify-center
       dark:bg-black-100"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
         bg-black-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
         dark:bg-red-400"
        />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-lg text-center text-blue-100 max-w-80">
            {tagline}
          </p>

          <TextGenerateEffect
            words={mainText}
            className={`text-center text-[40px] md:text-5xl lg:text-6xl ${textDirection === "rtl" ? "rtl" : "ltr"}`}
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            {greeting}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
