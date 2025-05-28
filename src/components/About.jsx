import React from 'react';

const About = () => {
    return (
       <section id="about" class="bg-white text-black py-20 px-6 md:px-16">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
    
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1 class="text-4xl md:text-5xl font-bold text-[#F5A800] mb-6">
        Exploring Generative AI
      </h1>
      <p class="text-lg md:text-xl text-[#000000] mb-8">
        Discover the future of Artificial Intelligence with AISS at IIIT-Delhi. Learn from experts and innovate with cutting-edge tools.
      </p>
      <a href="#register" class="inline-block bg-[#9B61F6] hover:bg-[#814ae2] text-white font-semibold px-6 py-3 rounded-2xl transition duration-300">
        Register Now
      </a>
    </div>

    <div class="md:w-1/2 flex justify-center">
      <div class="bg-[#F1F1F1] p-6 rounded-2xl shadow-md text-center">
        <img src="/path-to-your-qr-code.png" alt="QR Code" class="w-40 h-40 mx-auto mb-4" />
        <p class="text-black font-medium">Scan to Register</p>
      </div>
    </div>

  </div>
</section>

    );
};

export default About;