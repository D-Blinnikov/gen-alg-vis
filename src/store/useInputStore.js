import create from 'zustand'

export const useInputStore = create((set) => ({
    inputRawString : '',
    isClicked : false,
    clicks : 0,
    solution : {},
    setSolution : (solution) => set((state) => ({ solution : {...solution} })),
    setInputRawString : (string) => set((state) => ({ inputRawString : string })),
    setIsClicked : () => set((state) => ({ isClicked : !state.isClicked })), 
    setClicks : () => set((state) => ({ clicks: state.clicks + 1 })),
  }))
