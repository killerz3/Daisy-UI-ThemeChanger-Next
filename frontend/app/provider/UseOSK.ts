import { create } from "zustand";

interface oskType {
    finalWord: string;
    word: string;
    addLetter: (letter: string) => void;
    onDelete: () => void;
    onEnter: () => void;
}

export const UseOSK = create<oskType>((set) => ({
    finalWord: "",
    word: "",
    addLetter: (letter: string) =>
        set((state) => ({ word: state.word + letter })),
    onDelete: () => set((state) => ({ word: state.word.slice(0, -1) })),
    onEnter: () => set((state) => ({ finalWord: state.word })),
}));
