import React from "react";
import useLanguageStore from "@/store/LanguageStore";
import LanguageSwitch from "./language/LanguageSwitch";

// const MyComponent: React.FC = () => {
//   const { language } = useLanguageStore();

//   const texts = {
//     en: {
//       welcome: "Welcome",
//       description: "This is an English description.",
//     },
//     fa: {
//       welcome: "خوش آمدید",
//       description: "این یک توضیح فارسی است.",
//     },
//   };

//   return (
//     <div>
//       <h1>{texts[language].welcome}</h1>
//       <p>{texts[language].description}</p>
//     </div>
//   );
// };

const ChangeStatus: React.FC = () => {
  return (
    <div 
    // className="fixed top-4 left-4 z-50  p-4 rounded shadow-lg bg-gray-400"
    >
      <LanguageSwitch />
      {/* <MyComponent /> */}
    </div>
  );
};

export default ChangeStatus;
