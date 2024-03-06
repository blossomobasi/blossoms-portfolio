import type { Metadata } from "next";
// import { Montserrat_Alternates } from "next/font/google";
import { Exo_2 } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/NavBar";

// const montserrat_alternates = Montserrat_Alternates({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

const exo_2 = Exo_2({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blossom Obasi",
  description: "About Blossom Obasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo_2.className + " flex flex-col items-center"}>
        <NavBar />
        <div className="max-w-[100rem]">{children}</div>
      </body>
    </html>
  );
}
