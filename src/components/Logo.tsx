import Link from "next/link";

const Logo = () => {
    return (
        <Link
            href="/"
            className="font-bold italic tracking-widest text-stone-600 hover:text-black dark:text-stone-300"
        >
            Blossom.Obasi
        </Link>
    );
};

export default Logo;
