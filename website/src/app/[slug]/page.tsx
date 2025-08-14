// //src/app/[slug]/page.tsx
import { notFound } from "next/navigation";
import AboutLayout from "../components/layouts/about-layout/AboutLayout";
import ServiceLayout from "../components/layouts/service-layout/ServiceLayout";
import { fetchMenuBySlug } from "../api/menus/menusApi";

const layoutMap: Record<string, React.FC<any>> = {
  aboutLayout: AboutLayout,
  serviceLayout: ServiceLayout,
};

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>; // params is now a Promise
}) {
  const { slug } = await params; // ✅ await it first
  const pageData = await fetchMenuBySlug(slug);

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
