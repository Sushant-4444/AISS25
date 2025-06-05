import React from "react";
import { ScratchToReveal } from "./magicui/scratch-to-reveal";
import { MagicCard } from "./magicui/magic-card";
import { Lens } from "./magicui/lens";

const AboutUs = () => {
  const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const card_width = viewportWidth<768 ? viewportWidth * 0.9 : viewportWidth * 0.4;

  return (
    <section id="about" className="bg-white text-black px-6 py-16 relative">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none" style={{ backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-[max(5vw,40px)] font-bold mb-2">
          <span className="text-[#9B61F6]">About</span> <span className="text-[#F5A800]">AISS</span>
        </h1>
        <h2 className="text-black font-light text-xl mb-2">
          Artificial Intelligence Summer School
        </h2>
        <p className="text-black mb-6">The Artificial Intelligence summer school was initiated at the Infosys Center for Artificial Intelligence (CAI) at Indraprastha Institute of Information Technology, Delhi. AISS 2025 is the 4th iteration of the AISS. The new advancements in Artificial Intelligence have the potential to change the way we do things and offer definitive solutions to current problems. We aim to bring the discussion about these new advancements to the forefront.</p>
        {/* <button className="bg-gradient-to-r from-[#F5A800] to-[#9B61F6] text-white px-6 py-2 rounded-full font-medium">
          Register Now
        </button> */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-8">
        <MagicCard className={"p-0"} gradientColor="#D9D9D955">
        <Lens
          className="w-full h-full rounded-xl overflow-hidden"
          >
        <div className="bg-white/5 p-6 rounded-xl shadow-lg">
          <img
            src="banner.png"
            alt="Our Story"
            className="rounded-lg mb-4"
          />
        </div>
        </Lens>
        </MagicCard>

        <div className="flex flex-col gap-6 justify-center">
          {/* <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg"> */}
            <ScratchToReveal
      width={card_width}
      height={140}
      minScratchPercentage={70}
      className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
      gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
    >
      <div className="flex flex-col items-center justify-center h-full">
     <h3 className="text-black text-xl font-semibold mb-2">This Year's Theme</h3>
     <p className="text-black text-sm">
              Generative AI!
            </p>
            </div>
    </ScratchToReveal>

    <ScratchToReveal
      width={card_width}
      height={140}
      minScratchPercentage={70}
      className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
      gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
    >
      <div className="flex flex-col items-center justify-center h-full">
     <h3 className="text-black text-xl font-semibold mb-2">Last Year's Theme</h3>
     <p className="text-black text-sm">
              LLMs!
            </p>
            </div>
    </ScratchToReveal>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;