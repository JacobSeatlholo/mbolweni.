import { redirect } from "next/navigation";
import NavBar from "../components/navbar";
import SubNavbar from "../components/sub-navbar";

export default async function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {/* children is page.tsx dashboard */}
      {children}
    </main>
  );
}
