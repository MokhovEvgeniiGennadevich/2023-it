import Link from "next/link";
import styles from "./HeaderMenu.module.scss";

export default function HeaderMenu() {
  return (
    <ul className={styles.menu}>
      <li>
        <Link href='/dashboard'>Главная</Link>
      </li>
      <li>
        <Link href='/dashboard/articles'>Статьи</Link>
      </li>
      <li>
        <Link href='/dashboard/sections'>Разделы</Link>
      </li>
    </ul>
  );
}
