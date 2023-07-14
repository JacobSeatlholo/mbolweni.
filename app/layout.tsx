import "./globals.css";
import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const font = Geologica({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Uber Eats",
  description: "Food Delivery and Takeout made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
