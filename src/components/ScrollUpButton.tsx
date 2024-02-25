"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollUpButton = () => {
  // Fixed value
  const [visibility, setVisibility] = useState(true);
  const router = useRouter();

  return (
    <button
      className={`${
        visibility ? "block" : "hidden"
      } bg-stone-500 text-white p-2 rounded-sm absolute bottom-5 right-5`}
      onClick={() => router.push("#home")}
    >
      <BsArrowUp />
    </button>
  );
};

export default ScrollUpButton;
