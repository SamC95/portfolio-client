import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Head from "next/head";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Sam Clark Portfolio",
    description: "Software development portfolio for Sam Clark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
        <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
        <meta name={"description"} content={metadata.description ?? "Default description"} />
    </Head>
      <body
        className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
