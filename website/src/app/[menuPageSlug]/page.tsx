// //src/app/[slug]/page.tsx
import { notFound } from "next/navigation";
import AboutLayout from "../../components/layouts/about-layout/AboutLayout";
import ServiceLayout from "../../components/layouts/service-layout/ServiceLayout";
import { fetchMenuBySlug } from "../../services/menus";

const layoutMap: Record<string, React.FC<any>> = {
  aboutLayout: AboutLayout,
  serviceLayout: ServiceLayout,
};

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ menuPageSlug: string }>; // params is now a Promise
}) {
  const { menuPageSlug } = await params; // ✅ await it first
  const menuData = await fetchMenuBySlug(menuPageSlug);
  if (!menuData) return notFound();
  const LayoutComponent = layoutMap[menuData.layoutType];
  const pageData = "";
  if (!LayoutComponent) return notFound();

  return (
    <div className="bg-gradient-custom flex flex-col min-h-screen">
      <LayoutComponent data={menuData} />
    </div>
  );
}
