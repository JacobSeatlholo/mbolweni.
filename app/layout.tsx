import "./globals.css";
import type { Metadata } from "next";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Uber Eats",
  description: "Uber Eats | Food Delivery and Takeout made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
