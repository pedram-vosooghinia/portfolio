import React from "react";
import useLanguageStore from "@/store/LanguageStore";

const LanguageSwitch: React.FC = () => {
  const { language, switchLanguage } = useLanguageStore();
  const handleToggle = () => {
    switchLanguage(language === "en" ? "fa" : "en");
  };

  return (
    <div className="ltr flex justify-center items-center gap-4">
      <div
        className=" relative w-10 h-5  bg-black rounded-full cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={`absolute w-5 h-5 bg-green-400 rounded-full transition-transform duration-300 transform ${
            language === "fa" ? "translate-x-5" : ""
          }`}
        />
      </div>
        <p className="text-gray-100">{language === "en" ? "english": "فارسی"}</p>
    </div>
  );
};

export default LanguageSwitch;
