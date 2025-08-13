// components/layouts/ServiceLayout.tsx
export default function ServiceLayout({ data }: { data: any }) {
  return (
    <main className="services">
      <h1>{data.title}</h1>
      <ul>
        {data.services?.map((s: string) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </main>
  );
}
