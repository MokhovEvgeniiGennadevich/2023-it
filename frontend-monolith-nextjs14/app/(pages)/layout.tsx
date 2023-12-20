import HeaderMenu from "@/components/ui/HeaderMenu/HeaderMenu";
import "../globals.css";
import Logo from "@/components/ui/Logo/Logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body>
        <header>
          <Logo />
          <HeaderMenu />
        </header>
        {children}
      </body>
    </html>
  );
}
