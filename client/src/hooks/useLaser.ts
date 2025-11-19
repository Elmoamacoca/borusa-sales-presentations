import { create } from 'zustand';

interface LaserState {
  active: boolean;
  toggle: () => void;
}

export const useLaser = create<LaserState>((set) => ({
  active: false,
  toggle: () => set((state) => ({ active: !state.active })),
}));
