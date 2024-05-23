import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold italic tracking-widest text-stone-600 hover:text-black dark:text-stone-300 dark:hover:text-slate-300"
    >
      Blossom.dev
    </Link>
  );
};

export default Logo;
