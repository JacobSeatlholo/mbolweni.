import { create } from "zustand";

interface useSidebarModal {
  isModalOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMenuModal = create<useSidebarModal>((set) => ({
  isModalOpen: false,
  onOpen: () => set({ isModalOpen: true }),
  onClose: () => set({ isModalOpen: false }),
}));
