import Link from "next/link";
import { SwatchBook } from "lucide-react";
export default function Hero() {
  return (
    <section className="font-serif">
      <nav className="flex flex-row justify-around bg-white text-black">
        <div className="gap-2 flex flex-row">
          <SwatchBook size={30} className="text-black" />
          <h2>D STUDIO</h2>
        </div>
        <div className="flex flex-row gap-5">
          <div>overview</div>
          <div>about</div>
          <div>service</div>
          <div>contact</div>
        </div>
      </nav>
      <div className=" align-centre text-white flex flex-col justify-around items-center text-center bg-[url('https://images.pexels.com/photos/24285681/pexels-photo-24285681.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen p-10">
        <h6 className="font-serif text-3xl font-bold">
          Design systems and digital products built to endure.
        </h6>
        <h2 className="-translate-y-5 text-xl">
          We partner with ambitious founders and product teams to craft
          distinctive brand identities, fast web platforms, and intuitive
          software interfaces.
        </h2>
        <button className="bg-white text-black px-8 py-4 font-semibold text-lg hover:bg-black hover:text-white transition duration-300">
          Let's get started
        </button>
      </div>
    </section>
  );
}
