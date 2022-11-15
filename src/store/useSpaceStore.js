import create from 'zustand'

export const useSpaceStore = create((set, get) => ({
    showCoord : false,
    colorPointer : 'default',
    currentTimeLine : {},
    setColorPointer : (color) => set((state) => ({ colorPointer : color })),
    setShowCoord : () => set((state) => ({ showCoord : !state.showCoord })),
    setCurrentTimeLine : (tl) => set((state) => ({ currentTimeLine : tl }))
  }))