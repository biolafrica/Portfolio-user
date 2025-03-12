import { Manrope } from "next/font/google";
import "./globals.css";


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
    <html>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
