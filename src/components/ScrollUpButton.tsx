"use client";

import { BsArrowUp } from "react-icons/bs";
import { useState, useEffect, use } from "react";

import React from "react";

const ScrollUpButton = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`fixed bottom-5 right-5 bg-stone-500 dark:bg-stone-800 z-50 text-white p-2 rounded-sm ${
          scroll ? "block" : "hidden"
        }`}
      >
        <BsArrowUp />
      </button>
    </div>
  );
};

export default ScrollUpButton;
