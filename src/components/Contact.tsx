import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import Icon from "./Icon";

const Contact = () => {
  return (
    <section id="contact" className="md:my-20 my-10">
      <div className="uppercase font-extrabold text-stone-600 relative w-fit mb-10 text-xl italic -z-10">
        Contact Me
        <div className="absolute h-0.5 w-full bg-stone-600" />
      </div>

      <div className="flex md:flex-row flex-col md:gap-20 gap-10">
        <div className="space-y-10">
          <div className="flex items-center gap-5">
            <Icon>
              <BsPhone size={20} />
            </Icon>
            <div>
              <h3 className="text-xl font-semibold text-stone-600">Call:</h3>
              <code className="text-stone-500">+2349039477184</code>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Icon>
              <AiOutlineMail size={20} />
            </Icon>
            <div>
              <h3 className="text-xl font-semibold text-stone-600">Email:</h3>
              <Link
                href="mailto:blossomobasi2@gmail.com"
                className="text-stone-500 hover:text-stone-700"
              >
                blossomobasi2@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Icon>
              <SlLocationPin size={20} />
            </Icon>
            <div>
              <h3 className="text-xl font-semibold text-stone-600">
                Location:
              </h3>
              <span className="text-stone-500">Ojota, Lagos Nigeria</span>
            </div>
          </div>
        </div>

        <form className="w-full space-y-5">
          <div className="flex gap-5">
            <input
              className="w-full border-2 border-stone-300 focus-within:border-stone-500 rounded-md h-10 px-3"
              required
              type="text"
              placeholder="Name..."
            />
            <input
              className="w-full border-2 border-stone-300 focus-within:border-stone-500 rounded-md h-10 px-3"
              required
              type="email"
              placeholder="Email..."
            />
          </div>
          <input
            className="w-full border-2 border-stone-300 focus-within:border-stone-500 rounded-md h-10 px-3"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="w-full h-28 border-2 border-stone-300 focus-within:border-stone-500 rounded-md px-3"
            required
            placeholder="Message"
          />
          <button
            className="bg-stone-500 hover:bg-stone-600 text-white h-9 px-4 rounded-md"
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
