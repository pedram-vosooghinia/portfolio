import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="h-screen py-64 md:py-40" id="up">
  
      <div
        className="h-screen w-full  bg-yellow-400  
       absolute top-0 left-0 flex items-center justify-center
       dark:bg-black-100"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
         bg-black-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
         dark:bg-red-400"
        />
      </div>

      <div className="flex justify-center relative  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Hi! I&apos;m Pedram, a Next.js Developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
