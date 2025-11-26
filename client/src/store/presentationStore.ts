import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SlideConfig {
  id: string;
  order: number;
  conditionalRoutes?: Record<string, string>;
}

interface PresentationState {
  currentSlideId: string;
  history: string[];
  isFullscreen: boolean;
  
  // Actions
  setCurrentSlide: (slideId: string, addToHistory?: boolean) => void;
  goNext: () => void;
  goBack: () => void;
  goToSlide: (slideId: string) => void;
  handleConditionalRoute: (key: string) => void;
  setFullscreen: (isFullscreen: boolean) => void;
  
  // Helpers
  getCurrentSlide: () => SlideConfig | undefined;
  getNextSlide: () => SlideConfig | undefined;
  getPreviousSlide: () => SlideConfig | undefined;
}

// This will be populated from slides.config.ts
let slidesConfig: SlideConfig[] = [];

export const setSlidesConfig = (config: SlideConfig[]) => {
  slidesConfig = config;
};

export const usePresentationStore = create<PresentationState>()(
  persist(
    (set, get) => ({
      currentSlideId: 'welcome',
      history: [],
      isFullscreen: false,

  setCurrentSlide: (slideId: string, addToHistory = true) => {
    set((state) => ({
      currentSlideId: slideId,
      history: addToHistory ? [...state.history, state.currentSlideId] : state.history,
    }));
  },

  goNext: () => {
    const current = get().getCurrentSlide();
    const next = get().getNextSlide();
    if (next) {
      get().setCurrentSlide(next.id);
    }
  },

  goBack: () => {
    const state = get();
    if (state.history.length > 0) {
      const previousId = state.history[state.history.length - 1];
      set({
        currentSlideId: previousId,
        history: state.history.slice(0, -1),
      });
    }
  },

  goToSlide: (slideId: string) => {
    get().setCurrentSlide(slideId);
  },

  handleConditionalRoute: (key: string) => {
    const current = get().getCurrentSlide();
    if (current?.conditionalRoutes && current.conditionalRoutes[key]) {
      const targetSlideId = current.conditionalRoutes[key];
      get().setCurrentSlide(targetSlideId);
    }
  },

  setFullscreen: (isFullscreen: boolean) => {
    set({ isFullscreen });
  },

  getCurrentSlide: () => {
    const state = get();
    return slidesConfig.find((slide) => slide.id === state.currentSlideId);
  },

  getNextSlide: () => {
    const current = get().getCurrentSlide();
    if (!current) return undefined;
    
    const sortedSlides = [...slidesConfig].sort((a, b) => a.order - b.order);
    const currentIndex = sortedSlides.findIndex((s) => s.id === current.id);
    
    return sortedSlides[currentIndex + 1];
  },

  getPreviousSlide: () => {
    const current = get().getCurrentSlide();
    if (!current) return undefined;
    
    const sortedSlides = [...slidesConfig].sort((a, b) => a.order - b.order);
    const currentIndex = sortedSlides.findIndex((s) => s.id === current.id);
    
    return sortedSlides[currentIndex - 1];
  },
    }),
    {
      name: 'presentation-storage',
      partialPersist: (state) => ({
        currentSlideId: state.currentSlideId,
        history: state.history,
      }),
    }
  )
);
