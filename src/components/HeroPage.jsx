import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { BlurFade } from "./magicui/blur-fade";
import { ConfettiButton } from "./magicui/confetti";


const HeroPage = () => {
  return (
    <>
    <div className="relative h-screen w-100vw overflow-hidden flex items-center justify-center">
      {/* Grid pattern below content */}
      <div className="absolute inset-0 z-20 !bg-transparent">
        <InteractiveGridPattern gridHeight={typeof window !== "undefined" ? window.innerHeight : 800} />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-black px-4 !bg-white">
        <BlurFade delay={0.25} inView>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          AISS <span className="text-[#F5A800]">2025</span>
        </h1>
        </BlurFade>
        <BlurFade delay={0.5} inView>
        <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl font-roboto">
          Artificial Intelligence Summer School
          <br />
            <br />
            31st July - 2nd August 2025
          <br />
        </p>
        </BlurFade>
      </div>
    <div className="relative top-40 left-20 transform -translate-x-1/2 z-30">
        <BlurFade delay={0.75} inView>
        <a href="#register" className="inline-block mb-4">
        <ConfettiButton
            className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Register Now
        </ConfettiButton>
        </a>
        </BlurFade>
    </div>

    </div>
    </>
  );
};

export default HeroPage;