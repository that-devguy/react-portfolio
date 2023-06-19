import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: "../assets/fonts/BDStreetSignSans-RaisedInktrap.otf",
});

export const metadata = {
  title: "Zach Mutch - Portfolio",
  description: "My Front-end Web Development Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div class="home--bgCircle home--circleOne"></div>
      <div class="home--bgCircle home--circleTwo"></div>
    </>
  );
}
