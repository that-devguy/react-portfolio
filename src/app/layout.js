import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });


const myFont = localFont({ src: "../assets/fonts/BDStreetSignSans-RaisedInktrap.otf"})

export const metadata = {
  title: "Zach Mutch - Portfolio",
  description: "My Front-end Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">{children}</body>
    </html>
  );
}
