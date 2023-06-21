import "./globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zach Mutch - Portfolio",
  description: "My Front-end Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Zach Mutch | Front-end Web Developer</title>
        <meta name="My Front-end Web Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={inter.style}>{children}</body>
    </html>
  );
}