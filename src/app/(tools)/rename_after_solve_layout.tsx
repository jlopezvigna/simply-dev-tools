export default function Layout({
  pageTitle,
  pageDescription,
  children,
}: {
  pageTitle: string;
  pageDescription: string;
  children: React.ReactNode;
}) {
  return (
    <main className="px-8 py-6 md:px-24 py-20">
      <h2 className={`text-2xl font-semibold`}>{pageTitle}</h2>
      <p className={`mb-8 text-sm opacity-50`}>{pageDescription}</p>

      {children}
    </main>
  );
}
