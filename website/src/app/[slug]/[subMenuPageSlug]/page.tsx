import { notFound } from "next/navigation";

export default async function DynamicSubPage({
  params,
}: {
  params: { slug: string; subMenuPageSlug: string };
}) {
  //   const pageData = await fetchSubMenuBySlugs(params.slug, params.subslug);

  //   if (!pageData) return notFound();

  //   const LayoutComponent = layoutMap[pageData.layout];
  //   if (!LayoutComponent) return notFound();

  return (
    <div className="bg-gradient-custom flex flex-col min-h-screen">
      {/* <LayoutComponent data={pageData} /> */}
      <h1>DynamicSubPage</h1>
    </div>
  );
}
