import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discover",
  description: "Tienda Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed w-full h-screen bg-black opacity-70 -z-10"></div>
        <section className="dark:text-white">
          <NavBar/>
          {children}
          <Footer/>
        </section>      
      </body>
    </html>
  );
}
