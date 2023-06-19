import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zach Mutch - Portfolio",
  description: "My Front-end Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={inter.style}>{children}</main>
      <div className="home--bgCircle home--circleOne"></div>
      <div className="home--bgCircle home--circleTwo"></div>
    </>
  );
}
