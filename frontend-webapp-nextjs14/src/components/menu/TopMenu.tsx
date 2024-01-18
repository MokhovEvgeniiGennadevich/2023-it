"use client";

import { userType } from "@/types/user";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PropsType = {
  user: userType;
};

export default function TopMenuComponent(props: PropsType) {
  const menuItems = [
    { name: "Main", path: "/" },
    { name: "About", path: "/about" },
    { name: "About - Us", path: "/about/us" },
    { name: "Characters", path: "/characters" },
  ];

  // Мы получаем текущий URL от Next JS 14
  const currentUrl = usePathname();

  return (
    <>
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
    </>
  );
}
