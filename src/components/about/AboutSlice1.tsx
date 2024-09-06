import Image from "next/image";

const AboutSlice1 = () => {
    return (
        <div className="flex md:gap-x-10 gap-y-10 items-center flex-col md:flex-row">
            <div className="h-fit w-full overflow-hidden">
                <Image src="/dedicated_programmer.svg" alt="Laptop" width={1000} height={1000} />
            </div>

            <div className="w-full text-center md:text-left">
                <h2 className="text-2xl font-semibold">
                    A dedicated Developer based in Lagos, Nigeria 📍
                </h2>
                <p className="mt-3 text-sm text-stone-700 dark:text-stone-500">
                    I&apos;m currently pursuing a degree in Computer Science at Lagos State
                    University, now in my final year. My journey in the world of technology has been
                    both exciting and challenging.
                </p>
            </div>
        </div>
    );
};

export default AboutSlice1;
