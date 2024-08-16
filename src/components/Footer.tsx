import SocialIcons from "./SocialIcons";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t-2 border-t-stone-100 dark:border-t-stone-900 mb-5 flex flex-col items-center mt-10">
            <SocialIcons />

            <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                Copyright &copy; {year}. All rights are reserved |<strong> Blossom Obasi</strong>
            </p>
        </footer>
    );
};

export default Footer;
