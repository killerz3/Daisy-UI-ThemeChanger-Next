
import { create } from "zustand";


interface ThemeData{
    theme: String,
    setTheme:(theme: string)=> void,
  }
export const useTheme = create<ThemeData>()((set) => ({

    theme: typeof window !== "undefined"?localStorage.getItem("theme") ?? "light":"light",
    setTheme:(theme:string)=>set({theme}),
  }))