import { notFound } from "next/navigation";
import AboutLayout from "../components/layouts/about-layout/AboutLayout";
import ServiceLayout from "../components/layouts/service-layout/ServiceLayout";
import Header from "../components/header/Header";

const layoutMap: Record<string, React.FC<any>> = {
  aboutLayout: AboutLayout,
  serviceLayout: ServiceLayout,
};

async function getPageData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/pages/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const pageData = await getPageData(params.slug);
  if (!pageData) return notFound();

  const LayoutComponent = layoutMap[pageData.layout];
  if (!LayoutComponent) return notFound();

  return (
    <div className="bg-gradient-custom flex flex-col min-h-screen">
      <Header />
      <LayoutComponent data={pageData} />
    </div>
  );
}
