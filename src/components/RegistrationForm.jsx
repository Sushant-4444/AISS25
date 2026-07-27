import React from "react";
import { MagicCard } from "./magicui/magic-card";

const RegistrationForm = () => {
  return (
    <section
      id="register"
      className="w-full flex flex-col items-center justify-center py-12 px-4"
    >
      <h1 className="text-[max(48px,6vw)] font-bold text-[#F5A800] text-center mb-8">
        Registration Form
      </h1>

      <MagicCard
        className="w-full max-w-5xl rounded-xl p-4"
        gradientColor="#D9D9D955"
      >
        <div className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Registration Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLScsMbX3Z4WYPLtWH16rVWYTpRFiZ1B2-eLHTzJv7KmiM5-vaw/viewform?embedded=true"
            width="100%"
            height="2843"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full"
          >
            Loading...
          </iframe>
        </div>
      </MagicCard>

      <p className="text-sm text-gray-500 mt-4 text-center">
        If the form does not load, please refresh the page or contact the organizers.
      </p>
    </section>
  );
};

export default RegistrationForm;