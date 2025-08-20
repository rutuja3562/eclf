"use client";

import { useMenus } from "../../hooks/menus/useMenusHook";
import Header from "../header/Header";

export default function MenusWrapper() {
  const { data, isLoading } = useMenus();
  console.log("Menu data>>>", data);
  if (isLoading) return <div>Loading...</div>;
  return <Header menus={data ?? []} />;
}
