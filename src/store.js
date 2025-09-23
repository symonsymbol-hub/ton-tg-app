// src/store.js
import { create } from 'zustand';

export const useAppStore = create((set) => ({
  activeTab: 0,
  setActiveTab: (tabIndex) => set({ activeTab: tabIndex }),
}));