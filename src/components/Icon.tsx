import Link from "next/link";

type IconProps = {
  children: React.ReactNode;
  title?: string;
  url?: string;
};

const Icon = ({ children, title, url }: IconProps) => {
  const className =
    "bg-stone-200 dark:bg-stone-900 p-3 rounded-full w-fit hover:bg-stone-300 dark:hover:bg-stone-950";

  if (url)
    return (
      <Link target="_blank" href={url} title={title} className={className}>
        {children}
      </Link>
    );

  return (
    <div title={title} className={className}>
      {children}
    </div>
  );
};

export default Icon;
