"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTheme } from "../provider/UseTheme";
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const themes = [
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
  ];

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme!);
  }, [theme]);

  return (
    <div className="flex px-2 py-4 bg-base-100 text-base-content">
      <div className="flex-1 z-0">
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          Theme Changer
        </Link>
      </div>
      <div className="dropdown dropdown-end ">
        <label tabIndex={0} className="m-1 btn">Themes</label>
        <ul tabIndex={0} className=" shadow-xl menu-vertical dropdown-content flex flex-col z-10 h-60 min-w-max overflow-scroll bg-base-100 rounded-box ">
          {themes.map((theme, index) => (
            <li key={index}>
              <button
                className=" btn  flex justify-center items-center overflow-clip text-md mx-1 my-1 rounded-md hover:text-neutral-focus hover:bg-neutral-content"
                onClick={() => {
                  setTheme(theme);
                }}
              >
                <div className="flex h-3/5 gap-1">
                  <div data-theme={theme} className="bg-primary w-2 rounded" />
                  <div data-theme={theme} className="bg-secondary w-2 rounded" />
                  <div data-theme={theme} className="bg-accent w-2 rounded" />
                  <div data-theme={theme} className="bg-neutral w-2 rounded" />
                </div>
                <span>{theme}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ].map((theme, index) => (
{
  /* <li key={index}>
<button className="hover:text-neutral-content" onClick={()=>{setTheme(theme)}}>{theme}</button>
</li> */
}
// ))}
// </ul>

//   </details>
// </li>
// </ul>
// </div>
