"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopMenuComponent() {
  const menuItems = [
    { name: "Main", path: "/" },
    { name: "About", path: "/about" },
    { name: "About - Us", path: "/about/us" },
  ];

  // Мы получаем текущий URL от Next JS 14
  const currentUrl = usePathname();

  console.log(currentUrl);

  return (
    <div>
      Top Menu
      <ul>
        <li>
          {menuItems.map((item) => {
            // Пример по совпадению части URL но тогда root "/"
            // будет постоянно выдавать true
            let isActive = false;

            if (item.path === "/") {
              isActive = currentUrl === item.path;
            } else {
              isActive = currentUrl.startsWith(item.path);
            }

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`${
                  isActive
                    ? "p-2 underline underline-offset-2"
                    : "p-2"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
}
