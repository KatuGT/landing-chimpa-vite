import { create } from "zustand";

interface ElementType {
  IsDragging: boolean;
  getIsDragging: (is: boolean) => void;
}

export const useIsDragging = create<ElementType>()((set) => ({
  IsDragging: false,
  getIsDragging: (is) => set(() => ({ IsDragging: is })),
}));
