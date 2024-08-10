"use client";
import Hero from "@/components/Hero"       
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import useLanguageStore from "@/store/LanguageStore";
const Home = () => {
  const {language}=useLanguageStore()
  return (
    <main className=" bg-yellow-400  dark:bg-black-100 flex  flex-col  ">
        <FloatingNav  />
        <Hero />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
    </main>
  );
};

export default Home;
