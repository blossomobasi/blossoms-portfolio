"use client";

import ScrollToTop from "react-scroll-up";
import { BsArrowUp } from "react-icons/bs";

const ScrollUpButton = () => {
  return (
    <div className="z-50">
      <ScrollToTop showUnder={160}>
        <button className="bg-stone-500 z-50 text-white p-2 rounded-sm">
          <BsArrowUp />
        </button>
      </ScrollToTop>
    </div>
  );
};

export default ScrollUpButton;
