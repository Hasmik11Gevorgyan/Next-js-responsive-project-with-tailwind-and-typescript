import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../components/Home/navbar/responsiveNav"; // Use absolute import if path alias is set
import Footer from "../components/Home/Footer/Footer";


const font = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
 
export const metadata: Metadata = {
  title: "Startup landing page",
  description: "Startup landing page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
