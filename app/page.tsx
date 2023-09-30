"use client";

import { useState, useEffect } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import Counter from "./components/Counter";
export default function Home({ incrementValue = 0 }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode(false);
  const [customIncrement, setCustomIncrement] =
    useState<number>(incrementValue);

  window.onload = () => {
    const regex = new RegExp(`(^| )mode=([^;]+)`);
    const match = document.cookie.match(regex);
    var existingMode = false;
    console.log(match);
    if (match && match[2]) {
      existingMode = match[2] === "true" ? true : false;
      console.log("existingMode", existingMode, match[2], typeof match[2]);
      toggleDarkMode(false, existingMode);
    }
  };

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "dark:bg-gray-900 dark:text-white" : ""
      } h-screen w-screen flex flex-col justify-center items-center text-[25px] mx-2 `}
    >
      <>
        <button
          onClick={() => {
            toggleDarkMode(true);
          }}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {isDarkMode ? `Disable Dark Mode ☀️ ` : "Enable Dark Mode  🌙"}
        </button>
      </>

      <div className="relative">
        <input
          type="number"
          value={customIncrement}
          onChange={(e) => setCustomIncrement(Number(e.target.value))}
          min="1" // Set a minimum value to ensure a positive increment
          className={`p-4 ${
            isDarkMode ? "dark:bg-gray-900 dark:text-white" : ""
          } border-white`}
          placeholder=" "
        />

        <label
          htmlFor="floating_filled"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Input Field Counter
        </label>
      </div>
      <h1 className="text-[25px]">Counter (Custom Increment)</h1>
      <Counter incrementValue={customIncrement} />
    </div>
  );
}
