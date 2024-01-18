import Link from "next/link";

export default function SubMenu() {
  return (
    <>
      <ul>
        <li>
          <Link href='/dashboard/articles/create'>
            Создать
          </Link>
        </li>
      </ul>
    </>
  );
}
