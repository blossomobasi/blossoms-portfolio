"use client";

import React from "react";
import Link from "next/link";

import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

import Icon from "./Icon";
import ContactForm from "./ContactForm";
import TextHeader from "./TextHeader";

const Contact = () => {
    return (
        <section id="contact" className="md:my-20 my-10">
            <TextHeader>Contact Me</TextHeader>

            <div className="flex md:flex-row flex-col md:gap-20 gap-10">
                <div className="space-y-10 text-stone-600 dark:text-stone-300">
                    <div className="flex items-center gap-5">
                        <Icon>
                            <BsPhone size={20} />
                        </Icon>
                        <div>
                            <h3 className="text-xl font-semibold">Call:</h3>
                            <code className="text-stone-500">+2349039477184</code>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <Icon>
                            <AiOutlineMail size={20} />
                        </Icon>
                        <div>
                            <h3 className="text-xl font-semibold">Email:</h3>
                            <Link
                                href="mailto:blossomobasi2@gmail.com"
                                className="text-purple-600 font-medium"
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
                            <h3 className="text-xl font-semibold">Location:</h3>
                            <span className="text-stone-500">Ojota, Lagos Nigeria</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
