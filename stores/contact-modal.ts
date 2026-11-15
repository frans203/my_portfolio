import { create } from "zustand";

type ContactModalState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

// Qualquer CTA da página (header, hero, CTA final) abre o mesmo modal de contato.
export const useContactModal = create<ContactModalState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
