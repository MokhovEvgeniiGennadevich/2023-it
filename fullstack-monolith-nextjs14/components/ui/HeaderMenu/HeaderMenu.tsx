import Link from "next/link";

export default function HeaderMenu() {
  return (
    <ul>
      <li>
        <Link href='/'>Главная</Link>
      </li>
      <li>
        <Link href='/auth/sign-in'>Вход</Link>
      </li>
    </ul>
  );
}
