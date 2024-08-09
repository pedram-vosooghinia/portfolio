import React, { useEffect } from "react";
import useLightStore from "@/store/LightStore";

const LightSwitch: React.FC = () => {
  const { light, switchLight } = useLightStore();

  const handleToggle = () => {
    switchLight(light === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (light === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [light]);

  return (
    <div className="ltr flex justify-center items-center gap-4">
      <div
        className="relative w-10 h-5 bg-black rounded-full cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={`absolute w-5 h-5 bg-red-400 rounded-full transition-transform duration-300 transform ${
            light === "light" ? "" : "translate-x-5"
          }`}
        />
      </div>
      <p className="text-gray-100">{light === "light" ? "Light" : "Dark"}</p>
    </div>
  );
};

export default LightSwitch;
