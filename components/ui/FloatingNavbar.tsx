
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ChangeStatus from "@/components/ChangeStatus";
import useLanguageStore from "@/store/LanguageStore";
import { navItemsEn } from "@/data";
import { navItemsFa } from "@/data";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { language } = useLanguageStore(); // دریافت زبان

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 50) {
      setVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navItems = language === "fa" ? navItemsFa : navItemsEn;

  return (

   <div
      className={cn(
        "fixed top-10 inset-x-0  mx-auto  sm:max-w-xs transition-all duration-200 z-[5000]",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        className
      )}
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        borderRadius: "4px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      <div className= {`${language === "fa"? "rtl": ""}  flex flex-col  justify-center mx-4 my-1`}>
        <div className="flex justify-center items-center ">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                " mx-2    text-white  hover:text-green-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="pt-2">
          <ChangeStatus />
        </div>
      </div>
    </div>
  );
};
