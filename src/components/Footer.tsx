import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-stone-100 md:pt-10 pt-5 mb-5 flex flex-col items-center">
      <h2 className="font-semibold text-xl text-stone-600">
        Obasi Chizitere Blossom
      </h2>

      <div className="flex gap-5 mt-5">
        <Icon url="https://www.instagram.com/iambl0ss0m/" title="Instagram">
          <BsInstagram />
        </Icon>
        <Icon
          url="https://www.linkedin.com/in/obasi-blossom-07063a25a/"
          title="Linked in"
        >
          <FaLinkedinIn />
        </Icon>
        <Icon url="https://github.com/Dev-kami" title="Github">
          <FaGithub />
        </Icon>
      </div>

      <p className="mt-3 text-sm text-stone-600">
        Copyright &copy; 2024. All rights are reserved
      </p>
    </footer>
  );
};

export default Footer;
