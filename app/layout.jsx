import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/nav/header";
import Footer from "./components/nav/footer";

export const dynamic = "force-dynamic"


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Abiodun Biobaku | Software Engineer",
  description: "Abiodun Biobaku Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" style={{transitionProperty: "none", marginRight: "0"}} >
      <body className={manrope.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
