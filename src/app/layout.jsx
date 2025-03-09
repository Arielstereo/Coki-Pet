import { Blinker } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const myFont = Blinker({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: "Coki Pet",
  description: "Alimentos y accesorios para mascotas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
