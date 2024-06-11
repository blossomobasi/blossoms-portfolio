import Image from "next/image";

const AboutSlice1 = () => {
    return (
        <div className="flex md:gap-x-20 gap-y-10 items-center flex-col md:flex-row">
            <div className="h-fit w-full rounded-2xl overflow-hidden">
                <Image
                    src="/dedicated_programmer.svg"
                    alt="Laptop"
                    className="h-[20rem] w-[30rem]"
                    width={1000}
                    height={1000}
                />
            </div>

            <div className="w-full text-center md:text-left">
                <h2 className="text-2xl font-semibold">
                    A dedicated Front-end Developer based in Lagos, Nigeria 📍
                </h2>
                <p className="mt-3 text-sm text-stone-700 dark:text-stone-500">
                    I&apos;m currently pursuing a degree in Computer Science at Lagos State
                    University, now in my third year. My journey in the world of technology has been
                    both thrilling and rewarding.
                </p>
            </div>
        </div>
    );
};

export default AboutSlice1;
