'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useTheme } from '../provider/UseTheme';

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  
  
    useEffect(() => {
        localStorage.setItem('theme', theme as string)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html')?.setAttribute('data-theme', localTheme!)
    }, [theme]);
  
  
  
  return (
    <div className="navbar bg-base-100 text-base-content">
  <div className="flex-1">
    <Link href={"/"} className="btn btn-ghost normal-case text-xl">Theme Changer</Link>
  </div>
  <div className="flex-none px-10">
    <ul className="menu menu-horizontal px-1">

      <li>
        <details>
          <summary>
            Parent
              </summary>
              <ul className="grid p-2 bg-neutral text-neutral-content ">
  {[
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ].map((theme, index) => (
    <li key={index}>
      <button className="hover:text-neutral-content" onClick={()=>{setTheme(theme)}}>{theme}</button>
    </li>
  ))}
</ul>

          
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}
