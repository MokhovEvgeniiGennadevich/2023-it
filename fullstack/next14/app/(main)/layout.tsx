import HeaderMenu from "@/components/ui/HeaderMenu/HeaderMenu";
import "../globals.css";
import Logo from "@/components/ui/Logo/Logo";
import FooterComponent from "@/components/footer/Footer";

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

        <FooterComponent />
      </body>
    </html>
  );
}
