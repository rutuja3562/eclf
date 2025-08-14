// components/layouts/ServiceLayout.tsx
export default function ServiceLayout({ data }: { data: any }) {
  return (
    <main className="services min-h-screen w-full p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            {data.name}
          </h1>
          <p className="text-gray-500 mt-2">{data.slug}</p>
        </header>
        <section className="flex flex-row justify-center align-center ">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://www.pngall.com/wp-content/uploads/8/Service-Gear-PNG-Free-Download.png"
              alt="Service"
              width={380}
              height={230}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700">{data.layout}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
