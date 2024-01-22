import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold italic tracking-widest text-stone-600 hover:text-black"
    >
      Blossom.dev
    </Link>
  );
};

export default Logo;
