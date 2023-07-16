import "./globals.css";
import type { Metadata } from "next";

import ModalProvider from "@/providers/modal-provider";

export const metadata: Metadata = {
  title: "Uber Eats | Food Delivery and Takeout",
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
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
