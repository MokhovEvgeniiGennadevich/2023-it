import Link from "next/link";
import VersionComponent from "../version/Version";

export default function FooterComponent() {
  return (
    <footer>
      <p>
        <VersionComponent />
      </p>
      <p>
        <Link href='/dashboard'>Dashboard</Link>
      </p>
      <p>© 2023. Все права защищены.</p>
    </footer>
  );
}
