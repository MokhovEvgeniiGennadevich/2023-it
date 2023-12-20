import HeaderMenu from "@/components/dashboard/HeaderMenu/HeaderMenu";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body>
        <header>
          <HeaderMenu />
        </header>
        {children}
      </body>
    </html>
  );
}
