"use client";

import React from "react";

import { BsArrowUp } from "react-icons/bs";
import { useState, useEffect, use } from "react";

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
        <button
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`fixed bottom-5 right-5 bg-stone-500 dark:bg-stone-900 dark:hover:bg-stone-950 z-50 text-white p-2 rounded-sm ${
                scroll ? "block" : "hidden"
            }`}
        >
            <BsArrowUp />
        </button>
    );
};

export default ScrollUpButton;
