import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

const HeroPage = () => {
  return (
    <>
    <div className="relative h-screen w-100vw overflow-hidden flex items-center justify-center">
      {/* Grid pattern below content */}
      <div className="absolute inset-0 z-20 !bg-transparent">
        <InteractiveGridPattern gridHeight={typeof window !== "undefined" ? window.innerHeight : 800} />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-4 !bg-black">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          AISS 2025
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">
          Artificial Intelligence Summer School
          <br />
            <br />
            31st July - 2nd August 2025
          <br />
        </p>
      </div>
    <div className="relative top-40 left-20 transform -translate-x-1/2 z-30">
        <button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
            Register Now
        </button>
    </div>

    </div>


    </>
  );
};

export default HeroPage;