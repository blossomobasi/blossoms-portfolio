import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold italic tracking-widest hover:text-primary-800"
    >
      Blossom.dev
    </Link>
  );
};

export default Logo;
