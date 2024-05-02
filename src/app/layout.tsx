import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

/* import { Montserrat_Alternates } from "next/font/google";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
*/

const exo_2 = Exo_2({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blossom Obasi | Frontend Developer",
  description: "About Blossom Obasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo_2.className} max-w-[100rem]`}>{children}</body>
    </html>
  );
}
