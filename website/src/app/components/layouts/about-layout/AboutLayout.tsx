// components/layouts/AboutLayout.tsx
export default function AboutLayout({ data }: { data: any }) {
  return (
    <main className="about">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </main>
  );
}
