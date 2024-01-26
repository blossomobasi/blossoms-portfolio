import Link from "next/link";

const Icon = ({
  children,
  title,
  url,
}: {
  children: React.ReactNode;
  title?: string;
  url?: string;
}) => {
  const className = "bg-stone-200 p-3 rounded-full w-fit hover:bg-stone-300";

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
