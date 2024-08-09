// src/stores/languageStore.ts
import {create} from 'zustand';

type Language = 'en' | 'fa';

interface LanguageState {
  language: Language;
  switchLanguage: (lang: Language) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en', 
  switchLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;
