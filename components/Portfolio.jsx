export default function Portfolio() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 py-16 mt-20 bg-gray-100">
      <div className="flex flex-col items-center gap-4 group cursor-pointer">
        <h1 className="text-xl font-semibold text-center">Beyond The Buzz</h1>
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-[300px] h-[300px] object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
            src="https://images.pexels.com/photos/7868965/pexels-photo-7868965.jpeg"
            alt="Project 1"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 group cursor-pointer">
        <h1 className="text-xl font-semibold text-center">Chromatic stories</h1>
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-[300px] h-[300px] object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
            src="https://images.pexels.com/photos/5292198/pexels-photo-5292198.jpeg"
            alt="Project 2"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 group cursor-pointer">
        <h1 className="text-xl font-semibold text-center">
          The Art of Unboxing
        </h1>
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-[300px] h-[300px] object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
            src="https://images.pexels.com/photos/9185564/pexels-photo-9185564.jpeg"
            alt="Project 3"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 group cursor-pointer">
        <h1 className="text-xl font-semibold text-center">
          Aura Skin Launch Campaign
        </h1>
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-[300px] h-[300px] object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
            src="https://images.pexels.com/photos/8128063/pexels-photo-8128063.jpeg"
            alt="Aura Skin Campaign"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 group cursor-pointer">
        <h1 className="text-xl font-semibold text-center">
          Isar visual identity
        </h1>
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-[300px] h-[300px] object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
            src="https://images.pexels.com/photos/19413892/pexels-photo-19413892.jpeg"
            alt="Isar visual identity"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 group cursor-pointer">
        <h1 className="text-xl font-semibold text-center">Ecommerce Website</h1>
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-[300px] h-[300px] object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
            src="https://images.pexels.com/photos/6207729/pexels-photo-6207729.jpeg"
            alt="Ecommerce Website"
          />
        </div>
      </div>
    </main>
  );
}
