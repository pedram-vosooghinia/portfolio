"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-yellow-400 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <Hero />
        <Grid />
        <FloatingNav navItems={navItems} />
        <RecentProjects />
        <Clients />
        <Approach /> */}
        {/* <Experience /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
