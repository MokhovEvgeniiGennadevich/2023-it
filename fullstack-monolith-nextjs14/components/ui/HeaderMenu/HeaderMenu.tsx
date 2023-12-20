import Link from "next/link";
import styles from "./HeaderMenu.module.scss";

export default function HeaderMenu() {
  return (
    <ul className={styles.menu}>
      <li>
        <Link href='/auth/sign-in'>Вход</Link>
      </li>
    </ul>
  );
}
