// import { NextResponse } from "next/server";

import axios from "axios";
import { Menu } from "../../types/menusTypes";
import { API_BASE_URL } from "../../config/config";

export const fetchMenu = async (): Promise<Menu[]> => {
  const res = await axios.get(`${API_BASE_URL}/menus`);
  console.log("res", res.data);
  return res.data;
};

// export const fetchMenuBySlug = async (slug: string): Promise<Menu[]> => {
//   const res = await axios.get(`${API_BASE_URL}/menus/${slug}`);
//   console.log("res", res.data);
//   return res.data;
// };
export const fetchMenuBySlug = async (slug: string): Promise<Menu> => {
  const res = await axios.get(`${API_BASE_URL}/menus/${slug}`);
  return res.data;
};
