import Link from "next/link";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <span
          className={styles.logo}
          title='Евгений Мохов в АйТи'
        >
          <span className={styles.first_name}>Ev</span>
          <span className={styles.last_name}>Moh</span>{" "}
          <span className={styles.project_name}>IT</span>
        </span>
      </Link>
    </>
  );
}
