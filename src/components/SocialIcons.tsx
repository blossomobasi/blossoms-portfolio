import Icon from "./Icon";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
    return (
        <div className="flex sm:justify-start justify-center mt-5 gap-3">
            <Icon url="https://github.com/blossomobasi" title="Github">
                <FaGithub />
            </Icon>
            <Icon url="https://www.linkedin.com/in/blossomobasi" title="Linked in">
                <FaLinkedinIn />
            </Icon>
            <Icon url="https://www.instagram.com/blossomobasi_/" title="Instagram">
                <BsInstagram />
            </Icon>
            <Icon url="https://x.com/Blossom_obasi" title="Twitter(X)">
                <FaXTwitter />
            </Icon>
        </div>
    );
};

export default SocialIcons;
