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

export async function GET() {
  return NextResponse.json(pages);
}
