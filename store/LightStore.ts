import { create } from "zustand";

type Light = "light" | "dark";

interface LightState {
  light: Light;
  switchLight: (light: Light) => void;
}

const useLightStore = create<LightState>((set) => ({
    light: "light", 
  switchLight: (light) => set({ light: light }),
}));

export default useLightStore;
