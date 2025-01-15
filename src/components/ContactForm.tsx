"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

const MessageSent = () => {
	return (
		<div className="w-full h-28 flex items-center justify-center bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200">
			<p>Message sent successfully!</p>
		</div>
	);
};

const ContactForm = () => {
	const formRef = React.useRef<HTMLFormElement | null>(null);
	const [messageSent, setMessageSent] = React.useState(false);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm("service_vrs32ld", "template_2oikmni", formRef.current as HTMLFormElement, "NCT2JkJVp3pNSSDN5")
			.then(
				() => {
					setMessageSent(true);
					formRef.current?.reset();
				},
				(error) => {
					alert(`Failed to send email. Error: ${error}`);
				}
			);
	};

	if (messageSent) {
		return <MessageSent />;
	}

	return (
		<form ref={formRef} onSubmit={sendEmail} className="w-full space-y-5">
			<div className="flex gap-5">
				<input
					className="w-full border-2 border-stone-300 focus-within:border-stone-500 rounded-md h-10 px-3 dark:border-stone-800 dark:focus-within:border-stone-400 dark:bg-transparent"
					required
					type="text"
					placeholder="Name / Company"
					name="user_name"
				/>
				<input
					className="w-full border-2 border-stone-300 focus-within:border-stone-500 rounded-md h-10 px-3 dark:border-stone-800 dark:focus-within:border-stone-400 dark:bg-transparent"
					required
					type="email"
					placeholder="Email..."
					name="user_email"
				/>
			</div>
			<input
				className="w-full border-2 border-stone-300 focus-within:border-stone-500 rounded-md h-10 px-3 dark:border-stone-800 dark:focus-within:border-stone-400 dark:bg-transparent"
				type="text"
				placeholder="Subject"
			/>
			<textarea
				className="w-full h-28 border-2 border-stone-300 focus-within:border-stone-500 rounded-md px-3 py-1 dark:border-stone-800 dark:focus-within:border-stone-400 dark:bg-transparent"
				required
				placeholder="Message"
				name="message"
			/>
			<Button type="submit">Send message</Button>
		</form>
	);
};

export default ContactForm;
