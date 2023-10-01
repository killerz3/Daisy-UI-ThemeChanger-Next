'use client'
import { UseOSK } from '@/app/provider/UseOSK';
import React, { useCallback, useEffect, useState } from 'react';

export default function OnScreenKeyboard() {
  const { word, onDelete,onEnter,addLetter} = UseOSK();
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⬅︎'];
  const buttonClassName = "btn btn-md px-2 flex-1";
  const [tempWord, setTempWord] = useState<string>("");

  const handleKeyboardInput = useCallback((event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    console.log(key);

    if (!event.repeat || key==="BACKSPACE") {
      if (/^[a-zA-Z]+$/.test(key) && key.length === 1 && key !== " ") {
        addLetter(key)

      } else if (key === "BACKSPACE") {
        onDelete()

      } else if (key === "ENTER") {
        onEnter()

      }
    }

    
  }, []);
  
  

  const handleClick = (key: string) => {
    if (key.length !== 1 || key === "⬅︎") {
      if (key.toUpperCase() === "ENTER") {
        onEnter()

      } else if (key.toUpperCase() === "BACKSPACE" || key === "⬅︎") {
        onDelete()
      }
    } else {
      addLetter(key)
    }

    navigator.vibrate(100);
  };

  useEffect(() => {

    document.addEventListener("keydown", (e) => handleKeyboardInput(e));

    return () => {
      document.removeEventListener("keydown", (e) => handleKeyboardInput(e));
    };
  }, []);

  return (
    <div className='flex flex-col gap-2 justify-center items-center  w-screen md:w-2/3 lg:1/2 '>
      {word}
      <div className="flex justify-between gap-1 w-full">
        {row1.map((key) => (
          <button
            onClick={() => handleClick(key)}
            className={buttonClassName}
            key={key} // Add a unique key for each button
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-1 w-full">
        {row2.map((key) => (
          <button
            onClick={() => handleClick(key)}
            className={buttonClassName}
            key={key} // Add a unique key for each button
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-1 w-full">
        {row3.map((key) => (
          <button
            onClick={() => handleClick(key)}
            className={buttonClassName}
            key={key} // Add a unique key for each button
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
