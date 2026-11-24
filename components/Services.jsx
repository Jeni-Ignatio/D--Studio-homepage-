export default function Services() {
  return (
    <div className="flex flex-col  font-serif">
      <h4 className="h-[70px] flex justify-center items-center font-bold">
        Our services{" "}
      </h4>
      <div className="flex flex-row gap-8 justify-around">
        <div className="flex flex-col gap-6 justify-center items-center">
          <img
            className="w-[300px] h-[400px] object-cover object-cover rounded-2xl"
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
            alt=""
          />

          <h1 className="font-bold"> UI/UX</h1>
          <p className="text-center w-[250px]">
            Creating intuitive, visually engaging experiences that make every
            interaction effortless.
          </p>
          <button
            className="bg-gray-700 text-white w-30 hover:bg-black hover:text-white 
hover:scale-105 
transition-all duration-300 ease-in-out rounded-2xl"
          >
            Explore
          </button>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <img
            className="w-[300px] h-[400px] object-cover rounded-2xl"
            src="https://images.pexels.com/photos/6207729/pexels-photo-6207729.jpeg"
            alt=""
          />
          <h1 className="font-bold"> Web Dev</h1>
          <p className="text-center w-[250px]">
            Building fast, responsive, and scalable websites that bring ideas to
            life.
          </p>
          <button
            className="bg-gray-700 text-white w-30 hover:bg-black hover:text-white 
hover:scale-105 
transition-all duration-300 ease-in-out rounded-2xl"
          >
            Explore
          </button>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center ">
          <img
            className="w-[300px] h-[400px] object-cover rounded-2xl"
            src="https://images.pexels.com/photos/9973163/pexels-photo-9973163.jpeg"
            alt=""
          />
          <h1 className="font-bold">Branding</h1>
          <p className="text-center w-[250px]">
            Crafting distinctive brand identities that communicate purpose and
            leave a lasting impression.
          </p>
          <button
            className="bg-gray-700 text-white w-30 hover:bg-black hover:text-white 
hover:scale-105 
transition-all duration-300 ease-in-out rounded-2xl"
          >
            Explore
          </button>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <img
            className="w-[300px] h-[400px] object-cover  rounded-2xl"
            src="https://images.pexels.com/photos/33000152/pexels-photo-33000152.jpeg"
            alt=""
          />
          <h1 className="font-bold">Digital Marketting</h1>
          <p className="text-center w-[250px]">
            - Driving brand awareness and growth through creative, data-driven
            digital strategies.
          </p>
          <button
            className="bg-gray-700 text-white font-bold border-black w-30 hover:bg-black hover:text-white 
hover:scale-105 
transition-all duration-300 ease-in-out rounded-2xl"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
