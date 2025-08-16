// components/layouts/AboutLayout.tsx
export default function AboutLayout({ data }: { data: any }) {
  return (
    <main className="about flex flex-col items-center justify-center min-h-screen w-full text-white p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          {data.name}
        </h1>
        <p className="text-lg sm:text-xl opacity-90">{data.slug}</p>
        <p className="text-md sm:text-lg bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block shadow-md">
          {data.layout}
        </p>
      </div>
    </main>
  );
}
