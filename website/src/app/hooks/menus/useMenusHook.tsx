import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Menu } from "../../types/menusTypes";
import { fetchMenu, fetchMenuBySlug } from "../../services/menus";

// READ
export const useMenus = (): UseQueryResult<Menu[], Error> => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: fetchMenu,
    staleTime: 60 * 1000, // how long data stays fresh
    gcTime: 5 * 60 * 1000, // how long to keep in cache (was cacheTime)
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

//Read menus by slug name
export const useMenusBySlug = (slug: string): UseQueryResult<Menu, Error> => {
  return useQuery({
    queryKey: ["menus", slug],
    queryFn: () => fetchMenuBySlug(slug),
    enabled: !!slug,
    staleTime: 60 * 1000,
  });
};
