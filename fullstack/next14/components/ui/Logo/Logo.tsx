import Link from "next/link";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <>
      <Link href='/' className={styles.link}>
        <span
          className={styles.logo}
          title='Евгений Мохов в АйТи'
        >
          <span className={styles.first_name}>Ев</span>
          <span className={styles.last_name}>Мох</span>{" "}
          <span className={styles.project_name}>IT</span>
        </span>
      </Link>
    </>
  );
}
