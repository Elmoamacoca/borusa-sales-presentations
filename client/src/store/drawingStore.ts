import { create } from 'zustand';

export interface LaserPoint {
  x: number;
  y: number;
  timestamp: number;
}

interface DrawingState {
  laserActive: boolean;
  laserPoints: LaserPoint[];
  
  // Actions
  toggleLaser: () => void;
  addLaserPoint: (point: LaserPoint) => void;
  clearLaser: () => void;
}

export const useDrawingStore = create<DrawingState>((set) => ({
  laserActive: false,
  laserPoints: [],

  toggleLaser: () => set((state) => ({ laserActive: !state.laserActive, laserPoints: [] })),
  addLaserPoint: (point) => set((state) => ({ laserPoints: [...state.laserPoints, point] })),
  clearLaser: () => set({ laserPoints: [] }),
}));
