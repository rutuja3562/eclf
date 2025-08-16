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
  const pageData = await fetchMenuBySlug(menuPageSlug);

  if (!pageData) return notFound();
  console.log("pageData", pageData);
  const LayoutComponent = layoutMap[pageData.layout];
  console.log("LayoutComponent", LayoutComponent);
  if (!LayoutComponent) return notFound();

  return (
    <div className="bg-gradient-custom flex flex-col min-h-screen">
      <LayoutComponent data={pageData} />
    </div>
  );
}
