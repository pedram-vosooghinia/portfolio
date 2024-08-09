"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import useLanguageStore from "@/store/LanguageStore";
const Home = () => {
  const {language}=useLanguageStore()
  return (
    <main className=" bg-yellow-400 flex  flex-col  ">
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
