
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
