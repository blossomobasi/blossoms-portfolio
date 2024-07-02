import type { Metadata } from "next";
// import { Exo_2 } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";

import { Montserrat_Alternates } from "next/font/google";

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
                    className={`${montserrat_alternates.className} max-w-[100rem] dark:bg-[#0d0d0d] dark:text-stone-200 selection:bg-stone-500  selection:text-white `}
                >
                    {children}
                </body>
            </html>
        </DarkModeProvider>
    );
}
