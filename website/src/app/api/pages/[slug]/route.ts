import { NextResponse } from "next/server";

// app/api/menus/route.ts
const pages = [
  {
    slug: "about",
    layout: "aboutLayout",
    title: "About Us",
    content: "We are awesome.",
  },
  {
    slug: "services",
    layout: "serviceLayout",
    title: "Our Services",
    services: ["Plumbing", "Electrician"],
  },
];

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const page = pages.find((p) => p.slug === params.slug);
  if (!page) return new Response("Not Found", { status: 404 });
  return NextResponse.json(page);
}
