import type { Metadata } from "next";
// import { Exo_2 } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";

import { Montserrat_Alternates } from "next/font/google";
import NavBar from "@/components/NavBar";
import ScrollUpButton from "@/components/ScrollUpButton";
import Footer from "@/components/Footer";
import NextButton from "@/components/NextButton";
import PrevButton from "@/components/PrevButton";

const montserrat_alternates = Montserrat_Alternates({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

// const exo_2 = Exo_2({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Blossom Obasi | Full-stack Developer",
    description: "About Blossom Obasi",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DarkModeProvider>
            <html lang="en">
                <body
                    className={`${montserrat_alternates.className} dark:bg-[#0a0a0a] dark:text-stone-200 selection:bg-stone-500 selection:text-white`}
                >
                    <NavBar />
                    <section className="lg:px-24 md:px-14 px-5 pt-16">{children}</section>
                    <Footer />

                    <ScrollUpButton />
                    <PrevButton />
                    <NextButton />
                </body>
            </html>
        </DarkModeProvider>
    );
}
