import create from 'zustand'

export const useSpaceStore = create((set, get) => ({
    showCoord : false,
    colorPointer : 'default',
    setColorPointer : (color) => set((state) => ({ colorPointer : color })),
    setShowCoord : () => set((state) => ({ showCoord : !state.showCoord }))
  }))