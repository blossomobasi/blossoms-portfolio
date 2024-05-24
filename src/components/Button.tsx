import React from "react";
import Link from "next/link";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  url?: string;
}

const Button = ({ children, url }: IButtonProps) => {
  const className =
    "bg-stone-500 hover:bg-stone-600 dark:bg-stone-900 dark:hover:bg-stone-950 text-white h-9 px-4 rounded-md";

  if (url)
    return (
      <Link target="_blank" href={url} className={`${className} py-1.5`}>
        {children}
      </Link>
    );

  return <button className={className}>{children}</button>;
};

export default Button;
