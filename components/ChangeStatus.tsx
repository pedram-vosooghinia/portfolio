import React from "react";
import LanguageSwitch from "./switch/LanguageSwitch";
import LightSwitch from "./switch/LightSwitch";
const ChangeStatus: React.FC = () => {
  return (
    <div className="ltr flex justify-between items-center">
      <LanguageSwitch />
      <LightSwitch />
    </div>
  );
};

export default ChangeStatus;
